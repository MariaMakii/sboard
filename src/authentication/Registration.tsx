import {Form, Button, Input, Container} from "../components/components";

function RegistrationForm () {
    return (
        <Container>
            <Form>
                <Input type='text' placeholder='Имя'></Input>
                <Input type='email' placeholder='Email'></Input>
                <Input type='text' placeholder='Логин'></Input>
                <Input type='password' placeholder='Пароль'></Input>
                <Button>Зарегистрироваться</Button>
            </Form>
        </Container>
    );
}
export default RegistrationForm;