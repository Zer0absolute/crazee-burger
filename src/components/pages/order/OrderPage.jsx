import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import Main from "./main/Main";
import { AdminContext } from "../../../context/AdminContext";

export default function OrderPage() {
    const { username } = useParams()
    const [ isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isAddSelected, setIsAddSelected] = useState(true)
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [currentTabsSelected, setCurrentTabsSelected] = useState("add")

    const adminContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected,
        currentTabsSelected,
        setCurrentTabsSelected
    };

    return (
        <OrderPageStyled>
            <div className="container">
                <AdminContext.Provider value={adminContextValue}>
                    <Navbar username={username} />
                    <Main />
                </AdminContext.Provider>
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        background: red;
        height: 95vh;
        width: 1400px;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;

