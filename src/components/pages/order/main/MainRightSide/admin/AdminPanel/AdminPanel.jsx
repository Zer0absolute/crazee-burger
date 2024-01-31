import styled from "styled-components";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "../getTabsConfig";
import { theme } from "../../../../../../../theme";
import { AdminContext } from "../../../../../../../context/AdminContext";

export default function AdminPanel() {
    const { currentTabSelected } = useContext(AdminContext)

    const tabs = getTabsConfig(currentTabSelected)
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {currentTabSelected === tabSelected.index && tabSelected.content}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    padding: 30px 5%;
`;