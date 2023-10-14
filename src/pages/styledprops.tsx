import { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
    backGroundColor: string,
    color: string
}

const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backGroundColor};
    border: 2px solid ${(props) => props.color};
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