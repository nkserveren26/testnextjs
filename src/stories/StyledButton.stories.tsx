import { Meta } from "@storybook/react";
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
} as Meta<typeof StyledButton>;

//任意のデータをActionタブに表示したい場合はactionsで定義する
const incrementAction = action("increment");

//変数名がStory上に表示される
export const Primary = (props) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent) => {
        //引数にActionタブで表示したい値を渡す
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