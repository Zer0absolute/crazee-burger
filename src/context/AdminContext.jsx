import { createContext } from "react";

export const AdminContext = createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {}
});