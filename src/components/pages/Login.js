import { useReducer, useState } from "react"
import { AuthData } from "../../auth/AuthWrapper"
import { useNavigate } from "react-router-dom"
import { GoogleLogin } from '@react-oauth/google';

export const Login = () => {

    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer(
        (formData, newItem) => {return ( {...formData, ...newItem} )}, 
        {username:"", password:""}
    );
    const [errorMessage, setErrorMessage] = useState("");

    const doLogin = async () => {
        try {
            await login(formData.username, formData.password);
            navigate("/account");
        } catch (error) {
            setErrorMessage(error)
        }
    }
     
    const responseMessage = (response) => {
        login(response.credential);
        navigate("/account");
    };
    
    const getError = (error) => {
        setErrorMessage(error);        
    };

    return (
        <div className="page">
            <h2>Login Page</h2>
            <div className="inputs">

                <GoogleLogin onSuccess={responseMessage} onError={getError} />
            </div>
        </div>
    )
}