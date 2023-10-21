import { css, styled } from "styled-components"

const variants = {
    primary: {
        color: "#fffff",
        backgroundColor: "#103461",
        border: "none"
    },
    success: {
        color: "#fffff",
        backgroundColor: "#SAB203",
        border: "none"
    }
} as const

type StyledButtonProps = {
    variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ variant }) => {
        const style = variants[variant]
        return css`
            color: ${style.color};
            background-color: ${style.backgroundColor};
            border: ${style.border};
        `;
    }}

    border-radius: 12px;
    font-size: 14px;
    height: 38px;
    line-height: 22px;
    letter-spacing: 0;
    cursor: pointer;
`;

