import { useEffect, useState, useContext } from 'react';
import { LoginContext } from "./LoginProvider";
import { googleLogout, GoogleLogin } from '@react-oauth/google';


const Login = () => {
  const { isLoggedIn, isUser, profile, login, logout } = useContext(LoginContext);
  // const [localProfile, setLocalProfile] = useState([]);
  
  useEffect(() => {
    console.log("login.js", isLoggedIn);

    if(isLoggedIn) {
      console.log('PROFILE', profile);
      // setLocalProfile(profile);

    }
  }, [isLoggedIn]);

  const handleLogout = () => {
     logout();
  };

  const responseMessage = (response) => {
    login(response.credential);
};

const errorMessage = (error) => {
    console.log("ERROR");
    console.log(error);
};

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={() => {
            if(window.confirm('Do you want to log out?')) {handleLogout();}
            }}>
              <img className="profile-pic" src={profile.picture} alt="image not found" />
              <p className="profile-name">{profile.name}</p>
              
            </button>
        </div>

      ) : (
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      )}
    </div>
  );
};

export default Login;
