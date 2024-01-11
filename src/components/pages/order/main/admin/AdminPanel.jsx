import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { getTabSelected, getTabsConfig } from "./getTabsConfig";

export default function AdminPanel() {
    const { currentTabSelected } = useContext(AdminContext)

    const tabs = getTabsConfig(currentTabSelected)
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {currentTabSelected === tabSelected.index && tabSelected.label}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
`;