import RegistrationForm from "../authentication/Registration";
import {Button, Header, Layout} from "../components/components";
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import LoginForm from "../authentication/Login";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/registration" element={<RegistrationForm/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
