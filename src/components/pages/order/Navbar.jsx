import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="left-side">
                leftside
            </div>
            <NavbarRightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    display: flex;
    background: blue;
    height: 10vh;
    justify-content: space-between;

    .left-side {
        background: violet;
    }
`;