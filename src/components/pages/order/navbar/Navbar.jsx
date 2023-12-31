import styled from "styled-components";
import { theme } from "../../../../theme";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../../utils/window";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo className="logo-order-page" onClick={() => refreshPage()} />
            <NavbarRightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 0 20px;
    background: ${theme.colors.white};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};

    .logo-order-page {
        cursor: pointer;
    }
`;