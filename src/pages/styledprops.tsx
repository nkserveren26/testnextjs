import { NextPage } from "next";
import styled, { css } from "styled-components";

type ButtonProps = {
    backGroundColor: string,
    color: string
}

//styled-componentは、cssの定義を共通化して各コンポーネントで再利用できる
const redBox = css`
    padding: 0.25em 1em;
    border: 3px solid #ff0000;
    border-radius: 10px;
`;

const font = css`
    color: blue;
    font-size: 15px;
`;

//styled-componentで定義したコンポーネントの先頭文字は大文字にする。小文字だとエラーになる
const Button = styled.button<ButtonProps>`
    /* color, background, borderはpropsの値を使用 */
    color: ${(props) => props.color};
    background: ${(props) => props.backGroundColor};
    border: 2px solid ${(props) => props.color};

    font-size: 2em;
`;

const AnotherButton = styled.button`
    ${redBox}
    ${font}
`;

const Text = styled.p`
    font-weight: bold;
    ${font}
`;

const Styledprops: NextPage = () => {
    return (
        <div>
            <Button color="#FF0000" backGroundColor="transparent">
                Hello
            </Button>
            <Text>another button</Text>
            <AnotherButton>
                GoodBye
            </AnotherButton>
        </div>
    );
}

export default Styledprops;