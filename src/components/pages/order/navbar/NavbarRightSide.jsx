import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton"

export default function NavbarRightSide({ username }) {
    return (
        <NavbarRightSideStyled>
            <div className="admin-button">
                <ToggleButton />
            </div>
            <Profile username={username}/>
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .admin-button { 
        margin-right: 50px;
        font-family: 'Open Sans', sans-serif;
    }
`;