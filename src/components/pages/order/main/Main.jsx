import styled from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "./MainRightSide/MainRightSide";

export default function Main() {

    return (
        <MainStyled>
            {/* <div className="basket">basket</div> */}
            <MainRightSide/>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    height: calc(95vh - 10vh);
    display: grid;
    grid-template-columns: 1fr;
    /* This code will be use for Basket */
    /* grid-template-columns: 25% 1fr; */
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    /* .basket {
        background: pink;
    } */

`;