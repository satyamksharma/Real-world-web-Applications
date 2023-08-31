import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heaading from "../ui/Heading";

const LoginLayout = styled.main`
    min-height: 80vh;
    display: grid;
    grid-template-columns: 54rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function Login() {
    return (
        <LoginLayout>
            <Logo />
            <Heaading as='h4'>Log in to your account</Heaading>
            <LoginForm />
        </LoginLayout>
    );
}

export default Login;
