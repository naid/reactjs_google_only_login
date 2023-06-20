import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { RenderHeader } from "../components/structure/RenderHeader";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const secretKey = process.env.SECRETKEY;

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({data: null, isAuthenticated: false, isVerified: false});
    const checkEmail = async (email) => {
      if(typeof email !== "undefined") {
      // } else {
          try {
              const response = await axios.post('http://localhost:3001/check-email/', { email })
                .then((response) => {
                  console.log('VERIFIED');                  
                }, (error) => {
                  console.log('NOT VERIFIED');
                  console.log(error);
                }
              );
            } catch (error) {
              console.log("ERROR: LoginProvider 60");
              console.log(error); // logs "Email exists in database" or "Email does not exist in database"
            }
      }
    }
    const login = (data) => {
        return new Promise((resolve, reject) => {

            if(data !== undefined) {
              console.log("data HERE");
                console.log(data);
                localStorage.setItem("token", data);
                // localStorage.setItem("token2", jwt_encode data);
                setUser({data: jwt_decode(data), isAuthenticated: true, isVerified: false});
                resolve("success")
            } else {
              console.log('Incorrect Password');
                reject("Incorrect Password")
            }
        })
    }

    const logout = () => {
        setUser({data: null, isAuthenticated: false, isVerified: false});
        localStorage.removeItem('token');
    }

    useEffect(() => {
      // check if there is saved login info
      const token = localStorage.getItem("token");
      if (token) {
          console.log('Check Token (60)');
          setUser({data: jwt_decode(token), isAuthenticated: true, isVerified: false})
      } else  {
          console.log('Token absent (63)');          
      }
    }, []);

    useEffect(() => {
      
      console.log('check mo');
      console.log(user);
      if(user.data !== null) {
        checkEmail(user.data.email)
      }
      
      

    }, [user]);
      


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