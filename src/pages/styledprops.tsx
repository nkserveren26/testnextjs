import { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
    color: string
}

const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
`

const Styledprops: NextPage = () => {
    return (
        <div>
            <Button color="#FF0000">
                Hello
            </Button>
        </div>
    );
}

export default Styledprops;