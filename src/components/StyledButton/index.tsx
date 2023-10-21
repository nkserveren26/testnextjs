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
`;

