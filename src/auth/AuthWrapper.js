import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { RenderHeader } from "../components/structure/RenderHeader";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({data: null, isAuthenticated: false});
 
    
    const login = (data) => {
        return new Promise((resolve, reject) => {

            if(data !== undefined) {
                
                localStorage.setItem("token", data);
                setUser({data: jwt_decode(data), isAuthenticated: true});
                resolve("success")
            } else {
                
                reject("Incorrect Password")
            }
        })
    }

    const logout = () => {
        setUser({data: null, isAuthenticated: false});
        localStorage.removeItem('token');
    }

    useEffect(() => {
        // check if there is saved login info
        const token = localStorage.getItem("token");

        if (token) {
            setUser({data: jwt_decode(token), isAuthenticated: true})
        } else  {
            
        }

      }, []);


    return (
        <GoogleOAuthProvider clientId={googleApiKey}>
        <AuthContext.Provider value={{user, login, logout}}>
            <RenderHeader />
            <RenderMenu />
            <RenderRoutes />
        </AuthContext.Provider>
        </GoogleOAuthProvider>
    )
}