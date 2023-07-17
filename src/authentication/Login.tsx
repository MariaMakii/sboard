import {Button, Form, Container, Input} from "../components/components";

function LoginForm() {
    return (
        <Container>
            <Form autoComplete='off'>
                <Input type='text' placeholder="Логин" autoComplete="off"></Input>
                <Input type='password' placeholder="Пароль" autoComplete="off"></Input>
                <Button>Войти</Button>
            </Form>
        </Container>
    )
}

export default LoginForm;