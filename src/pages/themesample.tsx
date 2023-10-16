import { NextPage } from "next";
import { styled } from "styled-components";

const Text = styled.span`
    color: ${(props) => props.theme.colors.red};
`;


const ThemeSample: NextPage = () => {
    return (
        <div>
            <Text>Themeから参照した色を使用</Text>
        </div>
    );
}

export default ThemeSample;