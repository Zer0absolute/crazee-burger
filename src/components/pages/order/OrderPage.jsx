import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

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
    background: orange;
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
    }
`;

