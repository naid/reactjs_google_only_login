import { useReducer, useState } from "react"
import { AuthData } from "../../auth/AuthWrapper"
import { useNavigate } from "react-router-dom"

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
     


    return (
        <div className="page">
            <h2>Login Page</h2>
            <div className="inputs">
                <div className="input">
                    <input type="text" id="username" value={formData.username} onChange={(e) => setFormData({username: e.target.value})} />
                </div>
                <div className="input">
                    <input type="password" id="password" value={formData.password} onChange={(e) => setFormData({password: e.target.value})} />
                </div>
                <div className="button">
                    <button onClick={doLogin}>Log In</button>
                </div>
                {errorMessage ?
                    <div className="error">{errorMessage}</div>
                : 
                    null
                }
            </div>
        </div>
    )
}