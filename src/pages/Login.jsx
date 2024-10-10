import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Container= styled.div`
width:60%;
margin:1rem  auto;
display:flex;
align-content: center;
justify-content: center;
gap: 2rem;
background-color: var(--color-grey-50);
`;

function Login() {
  return (

    <LoginLayout>
      <Container>
        <div>
          <h4>'Credentials for Tour to Wild Oasis'</h4>
          <p>
            Email: test@test.com
          </p>
          <p>
            Password: 12345678
          </p>
        </div>
          

        
      </Container>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
