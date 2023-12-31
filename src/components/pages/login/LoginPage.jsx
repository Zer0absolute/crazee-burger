import styled from "styled-components";
import Logo from "../../reusable-ui/Logo"
import LoginForm from "./LoginForm"

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo className={"logo"}/>
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
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0, 0, 0, 0.7)),url("images/F03-burger-and-fries-background.jpg");
    background-size: cover;
    background-position: center;

    .logo {
        transform: scale(2.5);
    }
`;

