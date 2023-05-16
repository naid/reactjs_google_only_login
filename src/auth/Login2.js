import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import jwt_decode from "jwt-decode";
// import { loadClientAuth2 } from 'gapi-script';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const decoded = jwt_decode(123);
    // const { isSignedIn } = loadClientAuth2();
  
    const responseGoogle = (response) => {
      console.log("responseGoogle");
      // console.log(isSignedIn);

      decoded = jwt_decode(response.code); 

      console.log(response, decoded);
      setIsLoggedIn(true);
    };
  
    const onFailure = (error) => {
      console.log("onFailure");
      console.log(error);
    };
  
    const handleLogout = () => {
      window.gapi.auth2.getAuthInstance().signOut();
      setIsLoggedIn(false);
    };
  
    return (
      <>
        {isLoggedIn && (
          <div>
            <p>You are logged in!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        {!isLoggedIn && (
          <GoogleLogin
            clientId="953996358961-mjiuot07m4stsbjs5dd46me8c40ago2s.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code'
            accessType='offline'
            prompt='consent'
          />
        )}
      </>
    );
  }
  
  export default Login;