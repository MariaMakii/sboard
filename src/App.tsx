import LoginFrom from './authentication/Login'
import {Button, Header, Layout} from "./components/components";

function App() {
    return (
        <Layout>
            <Header>Вход</Header>
            <LoginFrom/>
            <Button>Регистрация</Button>
        </Layout>
    );
}

export default App;
