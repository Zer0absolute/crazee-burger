import { createContext } from "react";

export const AdminContext = createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},
    
    isAddSelected: false,
    setIsAddSelected: () => {},

    isEditSelected: false,
    setIsEditSelected: () => {},
});