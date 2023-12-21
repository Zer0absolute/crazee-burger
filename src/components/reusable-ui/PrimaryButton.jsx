import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon}) {
    return (
        <PrimaryButtonStyled>
            <span>{label}</span>
            {Icon && Icon}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    height: 55px;
    border-radius: ${theme.borderRadius.round};
    border: transparent;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    cursor: pointer;
    
    &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.primary_burger};
    }
    
    &:focus-visible {
        outline: none;
    }

    &:focus {
        background-color: ${theme.colors.primary_burger};
        color: ${theme.colors.white};
    }
`;