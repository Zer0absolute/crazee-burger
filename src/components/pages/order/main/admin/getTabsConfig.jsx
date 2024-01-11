import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTabsSelected) => [
    // {
    //     index: "chevronUpDown",
    //     label: "",
    //     Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //     onClick: () => setIsCollapsed(!isCollapsed),
    //     className: isAddSelected ? "is-active" : "",
    // },
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus/>,
        className: currentTabsSelected === "add" ? "is-active" : "",
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        className: currentTabsSelected === "edit" ? "is-active" : "",
    },
]