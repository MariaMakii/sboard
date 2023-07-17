import {Button, Form, Container, Input} from "../components/components";
import {Link} from "react-router-dom";
import styled from "styled-components";

function LoginForm() {

    const StyledDiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    return (
        <StyledDiv>
            <Container>
                <Form autoComplete='off'>
                    <Input type='text' placeholder="Логин" autoComplete="off"></Input>
                    <Input type='password' placeholder="Пароль" autoComplete="off"></Input>
                    <Button>Войти</Button>
                </Form>
            </Container>
            <Link to='/registration'>Регистрация</Link>
        </StyledDiv>
    )
}

export default LoginForm;