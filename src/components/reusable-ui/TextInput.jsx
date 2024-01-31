import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, version, ...extraProps }) {
    
    return (
        <TextInputStyled version={version}>
            <div className="icon">{Icon && Icon}</div>
            <input
                value={value}
                onChange={onChange}
                type="text"
                {...extraProps}
            />
        </TextInputStyled>
    )
}

const TextInputStyled = styled.div`
    width: 100%;
    position: relative;
    border-radius: ${theme.borderRadius.round};


    input { 
        display: flex;
        width: 100%;
        border: transparent;
        color: ${theme.colors.dark};
        border-radius: ${theme.borderRadius.round};
        align-items: center;
        justify-content: center;

        &:focus-visible {
            outline: none;
        }
    }

    ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    height: 55px;
    padding: 18px 24px 18px 52px;
    
    .icon {
        position: absolute;
        color: ${theme.colors.greySemiDark};
        left: 24px;
        bottom: 16px;
    }
    
    input {
        color: ${theme.colors.dark};
        
        &::placeholder {
            background: ${theme.colors.white};
        }
    }
`

const extraStyleMinimalist = css`
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.greyBlue};
    height: 40px;
    
    .icon {
        position: absolute;
        left: 16px;
        bottom: 8px;
    }
    
    input {
        background: ${theme.colors.background_white};
        color: ${theme.colors.dark};
        padding: 12px 16px 8px 45px;
        
        &:focus {
            outline: 0;
        }
    }
`
const extraStyle = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist,
}