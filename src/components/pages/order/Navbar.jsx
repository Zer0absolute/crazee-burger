import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="left-side">
                leftside
            </div>
            <div className="right-side">
                <h1>Bonjour {username}</h1>
                <Link to="/">
                    <button>Déconnexion</button>
                </Link>
            </div>
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

    .right-side {
        background: violet;
    }
`;