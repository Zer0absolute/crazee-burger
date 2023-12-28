import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { theme } from "../../../theme";

export default function OrderPage() {
    const { username } = useParams()
    
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar username={username} />
                <Main />
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

