import { useState } from "react";
import { googleLogout, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";



const Login = () => {
  const signedIn = useState(false);
  const [ profile, setProfile ] = useState([]);

  const responseMessage = (response) => {
      console.log("RESPONSE");
      console.log(response);

      response && ( setProfile(jwt_decode(response.credential)) );
      console.log(profile);
  };
  const errorMessage = (error) => {
    console.log("ERROR");
      console.log(error);
  };
  const logOut = () => {
    googleLogout();
    setProfile(null);
};

  return (
    <div>
      {!signedIn && <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />}
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      {signedIn && <div className="welcome">VVelcome <button onClick={logOut}>Log out</button></div>}
      
    </div>
  );
};

export default Login;