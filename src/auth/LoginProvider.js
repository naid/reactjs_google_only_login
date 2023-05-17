import { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const LoginContext = createContext();
export const LoginUpdateContext = createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function useLoginUpdate() {
  return useContext(LoginUpdateContext);
}

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [profile, setProfile] = useState([]);
  const [message, setMessage] = useState('Please wait while we check your user status.');
  const [errorStatus, setErrorStatus] = useState('RUNNING');

  function callLogin(){
    //console.log('This is the login provider');
  }

  function callLogin2(){
    //console.log('2nd from provider');
  }

  const getErrorMessage = (type) => {

    const contentMap = {
      'RUNNING': <div>Please wait for verification.</div>,
      'ERR_NETWORK': <div>There's a problem connecting to the server. Please try aging in a few minutes.</div>,
      'ERR_BAD_REQUEST': <div>The Google user is not yet a permitted user of the system.</div>,
    };
  
    return contentMap[type] || <div>Please wait for verification</div>;
  };

  const checkEmail = async (email) => {
    if(typeof email !== "undefined") {
    // } else {
        try {
            //console.log('POSTING TO '+email+' CHECK'); // logs "Email exists in database" or "Email does not exist in database"
            
            const response = await axios.post('http://localhost:3001/check-email/', { email })
              .then((response) => {
                //console.log('WHATRESPONSE');
                //console.log(response);
                setIsUser(true);
                setMessage('');
              }, (error) => {
                //console.log("ERRAH");
                //console.log(error);
                setIsUser(false);
                setErrorStatus(error.code)
                setMessage(getErrorMessage(errorStatus));
              }
            );
          } catch (error) {
            //console.log("ERRAHRUUH");
            //console.log(error); // logs "Email exists in database" or "Email does not exist in database"
          }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // wait for variable assignment to complete
        await Promise.resolve();
        checkEmail(profile.email);
      } catch (error) {
        //console.error(error);
      }
    };
    if (profile.email) {
      fetchData();
    }
  }, [profile.email]);

  useEffect(() => {
    // Check if the user is already logged in using a stored token
    const token = localStorage.getItem("token");
    
    if (token) {
        setProfile(jwt_decode(token));
        setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {

    //use sha256 with salt
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setProfile(jwt_decode(token));
  };

  const logout = () => {
    //console.log('Provider Logout');
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsUser(false);
    setProfile([]);

  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, isUser, profile, message, login, logout }}>
      <LoginUpdateContext.Provider value={ {callLogin, callLogin2} }>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
};

export default LoginProvider;