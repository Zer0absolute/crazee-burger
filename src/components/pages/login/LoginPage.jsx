import styled from "styled-components";
import Logo from "../../reusable-ui/Logo"
import LoginForm from "./LoginForm"

export default function LoginPage() {
    // render
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
    background-color: red;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

