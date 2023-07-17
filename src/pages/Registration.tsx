import LoginFrom from '../authentication/Login'
import RegistrationForm from "../authentication/Registration";
import {Button, Header, Layout} from "../components/components";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

function Registration() {
    return (
       <RegistrationForm/>
    );
}

export default Registration;
