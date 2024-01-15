import { createContext } from "react";

export const AdminContext = createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},
    
    currentTabSelected: false,
    setCurrentTabSelected: () => {},
    
    menu: [],
    handleAddProduct: () => {},
});