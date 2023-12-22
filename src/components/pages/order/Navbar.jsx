import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo />
            <NavbarRightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    display: flex;
    background: blue;
    height: 10vh;
    justify-content: space-between;
    padding: 0 20px;
`;