import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
    
    return (
        <TextInputStyled>
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

    .icon {
        position: absolute;
        color: ${theme.colors.greySemiDark};
        left: 24px;
        bottom: 16px;
    }

    input { 
        width:  100%;
        height: 55px;
        border-radius: ${theme.borderRadius.round};
        border: transparent;
        color: ${theme.colors.dark};
        padding: 18px 24px 18px 52px;
        
        &:focus-visible {
            outline: none;
        }
        
        &::placeholder { 
            color:#D3D3D3;
        }
    }
`;