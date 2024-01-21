import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon}) {
    return (
        <PrimaryButtonStyled >
            <span>{label}</span>
            <div className="icon">{Icon && Icon}</div>
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius.round};
    border: transparent;
    background-color: ${theme.colors.primary};
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
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        transition: background 0.4s ease;
    }
    
    &:focus-visible {
        outline: none;
    }

    &:focus {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }
`;