import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
    return (
        <MainStyled>
            {/* <div className="basket">basket</div> */}
            <div className="menu-and-admin">
                <Menu />
                <div className="admin">
                    admin
                </div>
            </div>
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
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    /* .basket {
        background: pink;
    } */

    .menu-and-admin {
        display: grid;
        position: relative;
        overflow-y: hidden;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};

        .admin {
            left: 0;
            right: 0;
            bottom: 0;
            height: 250px;
            background: red;
            position: absolute;
        }
    }
`;