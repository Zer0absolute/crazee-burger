import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
    return (
        <LogoStyled className={className} onClick={onClick}>
            <h1>CRAZEE</h1>
            <div className="img-container">
                <img src="/images/F03-logo-burger-orange.png" alt="Logo Burger" />
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
        font-size: 36px;
        letter-spacing: 0.0938rem;
        text-transform: uppercase;
        margin: 0;
    }

    .img-container img{ 
        width: 80px;
        height: 60px;
        flex-shrink: 0;
    }
`;