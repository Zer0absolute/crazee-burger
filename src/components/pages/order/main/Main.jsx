import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
    return (
        <MainStyled>
            {/* <div className="basket">basket</div> */}
            <Menu />
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    flex: 1;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-columns: 1fr;
    overflow-y: scroll;

    /* This code will be use for Basket */
    /* grid-template-columns: 25% 1fr; */
    
    /* .basket {
        background: pink;
    } */
`;