import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Tab({ Icon, onClick, className }) {
    
    return (
        <TabStyled onClick={onClick} className={className}>
            <div className="icon">{Icon}</div>
        </TabStyled>
    )
}

const TabStyled = styled.div`
    height: 43px;
    padding: 0 22px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    position: relative;
    left: 5%;
    top: 1px;

    font-size: ${theme.fonts.P0};
    color: ${theme.colors.greySemiDark};

    background: ${theme.colors.white};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);    

    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};

    border-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;

    &:hover {
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icon {
        display: flex;
    }
`;