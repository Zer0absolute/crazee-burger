import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, version}) {
    return (
        <PrimaryButtonStyled version={version}>
            <span>{label}</span>
            <div className="icon">{Icon && Icon}</div>
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    ${({ version }) => extraStyle[version]}
    height: 100%;
    border: transparent;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    cursor: pointer;

    .icon {
        position: absolute;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
    }

    &:hover {
        background: ${theme.colors.white};
        transition: background 0.4s ease;
    }

    &:focus-visible {
        outline: none;
    }
`;

const extraStyleNormal = css`
    width: 100%;
    background-color: ${theme.colors.primary};
    cursor: pointer;
    
    &:hover {
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        
        &:active {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    }
    

    &:focus {
        background-color: ${theme.colors.primary};
    }
`

const extraStyleSuccess = css`
    width: 40%;
    background-color: ${theme.colors.success};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};
    
    &:hover {
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};

        &:active {
            background-color: ${theme.colors.success};
            color: ${theme.colors.white};
        }
    }

    &:focus {
        background-color: ${theme.colors.success};
    }
`

const extraStyle = {
    normal: extraStyleNormal,
    success: extraStyleSuccess,
}