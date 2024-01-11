import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function AdminTabs() {
    const { 
        isCollapsed, 
        setIsCollapsed, 
        isAddSelected, 
        setIsAddSelected, 
        isEditSelected, 
        setIsEditSelected 
    } = useContext(AdminContext)

    const selectTab = (tabSelected) => {
        setIsCollapsed(false)

        if (tabSelected === "add") {
            setIsAddSelected(true)
            setIsEditSelected(false)
        }

        if (tabSelected === "edit") {
            setIsEditSelected(true)
            setIsAddSelected(false)
        }
    }
    
    const tabsConfig = [
        {
            label: "",
            Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
            onClick: () => setIsCollapsed(!isCollapsed),
            className: isAddSelected ? "is-active" : "",
        },
        {
            label: "Ajouter un produit",
            Icon: <AiOutlinePlus/>,
            onClick: () => {selectTab("add")},
            className: isAddSelected ? "is-active" : "",
        },
        {
            label: "Modifier un produit",
            Icon: <MdModeEditOutline />,
            onClick: () => {selectTab("edit")},
            className: isEditSelected ? "is-active" : "",
        },
    ]

    return (
        <AdminTabsStyled>
            {tabsConfig.map((tab) => {
                return (
                    <Tab 
                        label={tab.label} 
                        Icon={tab.Icon} 
                        onClick={tab.onClick} 
                        className={tab.className}
                    />
                )
            })}
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