import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
    return (
        <LogoStyled>
            <h1>CRAZEE</h1>
            <div className="img-container">
                <img src="images/F03-logo-burger-orange.png" alt="Logo Burger" />
            </div>
            <h1>BURGER</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: ${theme.colors.primary};
        font-size: 6.875rem;
        letter-spacing: 0.0938rem;
        text-transform: uppercase;
        margin: 0;
    }

    .img-container img{ 
        width: 200px;
        height: 150px;
        flex-shrink: 0;
    }
`;