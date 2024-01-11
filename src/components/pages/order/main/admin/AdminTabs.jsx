import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
    const { 
        isCollapsed, 
        setIsCollapsed, 
        currentTabsSelected,
        setCurrentTabsSelected
    } = useContext(AdminContext)

    const selectTab = (tabSelected) => {
        setIsCollapsed(false)
        setCurrentTabsSelected(tabSelected)
    }

    const tabs = getTabsConfig(currentTabsSelected)
    return (
        <AdminTabsStyled>
            <Tab 
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
                onClick={() => setIsCollapsed(!isCollapsed)} 
                className={isCollapsed ? "is-active" : ""}
            />
            {tabs.map((tab) => (<Tab 
                    label={tab.label} 
                    Icon={tab.Icon} 
                    onClick={() => {selectTab(tab.index)}} 
                    className={tab.className}
                />
            ))}
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
    }

    button {
        margin-left: 1px;
    }
`;