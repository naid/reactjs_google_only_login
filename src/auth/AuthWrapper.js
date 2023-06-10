import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../components/structure/RenderHeader";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({name: "", isAuthenticated: false});

    const login = (username, password) => {
        return new Promise((resolve, reject) => {

            if(password === "password") {
                setUser({name: username, isAuthenticated: true})
                resolve("success")
            } else {
                reject("Incorrect Password")
            }
        })
    }

    const logout = () => {
        setUser({name: "", isAuthenticated: false});
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            <RenderHeader />
            <RenderMenu />
            <RenderRoutes />
        </AuthContext.Provider>
    )
}