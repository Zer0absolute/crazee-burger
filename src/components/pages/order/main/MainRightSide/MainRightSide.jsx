import styled from "styled-components";
import Menu from "./Menu/Menu.jsx";
import Admin from "./admin/Admin.jsx";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { theme } from "../../../../../theme";

export default function MainRightSide() {
    const { isModeAdmin } = useContext(AdminContext);

    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && <Admin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    display: grid;
    position: relative;
    overflow-y: hidden;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;