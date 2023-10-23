import { Meta, StoryFn } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
    // グループ名
    title: "StyledButton",
    // 使用するコンポーネント
    component: StyledButton,
    //onClickが呼ばれたときにclickedというアクションを出力する
    //argTypes: { onClick: {action: "clicked"}},
    //Controlタブでコンポーネントのpropsを制御する場合はargTypesでpropsの値を定義
    argTypes: {
        variant: {
            control: {type: "radio"},
            options: ["primary", "success"],
        },
        children: {
            control: {type: "text"},
        },
    },
} as Meta<typeof StyledButton>;

//任意のデータをActionタブに表示したい場合はactionで定義する
const incrementAction = action("increment");

//変数名がStory上に表示される
export const Primary = (props) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent) => {
        //actionで定義した関数の引数にActionタブで表示したい値を渡す
        incrementAction(e, count);
        setCount((c: number) => c + 1);
    }

    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
};

export const Success = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    );
}


//バージョン7ではStoryは非推奨なのでStoryFnを使う
//テンプレートコンポーネントの作成
const Template: StoryFn<typeof StyledButton> = (args) => <StyledButton {...args}/>

//bind関数を呼び出し、テンプレートコンポーネントをStoryに登録
export const TemplateTest = Template.bind({});

//デフォルトのpropsを設定
TemplateTest.args = {
    variant: "primary",
    children: "primary"
}