import { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
    backGroundColor: string,
    color: string
}

const Button = styled.button<ButtonProps>`
    /* color, background, borderはpropsの値を使用 */
    color: ${(props) => props.color};
    background: ${(props) => props.backGroundColor};
    border: 2px solid ${(props) => props.color};

    font-size: 2em;
`

const Styledprops: NextPage = () => {
    return (
        <div>
            <Button color="#FF0000" backGroundColor="transparent">
                Hello
            </Button>
        </div>
    );
}

export default Styledprops;