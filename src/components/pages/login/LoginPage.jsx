import styled from "styled-components";
import Logo from "../../reusable-ui/Logo"
import LoginForm from "./LoginForm"

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    background: url("public/images/F03 burger-and-fries-background.jpg"), rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
        
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

