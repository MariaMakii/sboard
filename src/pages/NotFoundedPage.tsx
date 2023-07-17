import LoginFrom from '../authentication/Login'
import RegistrationForm from "../authentication/Registration";
import {Button, Container, Header, Layout} from "../components/components";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

function NotFoundedPage() {
    return (
        <Layout>
            <Header>Страница не найдена.</Header>
        </Layout>
    );
}

export default NotFoundedPage;