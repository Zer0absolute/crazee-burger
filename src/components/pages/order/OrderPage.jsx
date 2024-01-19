import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import Main from "./main/Main";
import { AdminContext } from "../../../context/AdminContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
    const { username } = useParams()
    const [ isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.LARGE)
    
    const handleAddProduct = (newProduct) => {
        const menuCopy = [...menu]
        const menuUpdated = [newProduct,...menuCopy]
        setMenu(menuUpdated)
    }

    const handleDelete = (productId) => {
        const menuCopy = [...menu]
        const menuUpdated = menuCopy.filter((product) => product.id !== productId)
        setMenu(menuUpdated)
    }

    const resetMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    const adminContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        menu,
        handleAddProduct,
        handleDelete,
        resetMenu,
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

