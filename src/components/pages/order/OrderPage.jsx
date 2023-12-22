import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage() {
    const { username } = useParams()
    
    return (
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    navbar
                    <h1>Bonjour {username}</h1>
                    <br />
                    <Link to="/">
                        <button>Déconnexion</button>
                    </Link>
                </div>
                <div className="main">
                    main
                </div>
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

        .navbar {
            background: blue;
            height: 10vh;
        }
        
        .main {
            background: green;
            flex: 1;
        }
    }
`;

