import { Meta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

export default {
    // グループ名
    title: "StyledButton",
    // 使用するコンポーネント
    component: StyledButton,
} as Meta<typeof StyledButton>;

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}