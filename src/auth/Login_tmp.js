import { useEffect, useState } from "react";
import { googleLogout, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import CryptoJS from 'crypto-js';

const Login = ({ setSigned, setProfile }) => {
  const [ signedIn, setSignedIn ] = useState(false);
  const [ profileData, setProfileData ] = useState([]);
  const [ encryptedProfileData, setEncryptedProfileData ] = useState([]);

  useEffect(() => {
    //CALL PARENT functions
    setSigned(signedIn);
    setProfile(profileData);

    //This will be saved in teh Localstorage
    const cipherText = CryptoJS.SHA256(JSON.stringify(encryptedProfileData)).toString();
    if(signedIn) {
      localStorage.setItem('profile', JSON.stringify(profileData));
      localStorage.setItem('encProfile', cipherText);
  
    }
  }, [signedIn, profileData]);


  const responseMessage = (response) => {
      console.log("Logging In");
      response && ( setProfileData(jwt_decode(response.credential)) );
      response && ( setEncryptedProfileData(response.credential) );
      setSignedIn(true);
  };

  const errorMessage = (error) => {
    console.log("ERROR");
      console.log(error);
  };

  const logOut = () => {
    console.log(profileData);
    googleLogout();

    //Remove localstorage
    localStorage.removeItem('profile');
    localStorage.removeItem('encProfile');

    setSignedIn(false);
    setProfileData([]);    
};

  return (
    <div>
      {!signedIn && <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />}
      {signedIn && 
        <div className="welcome">
          <img className="profile-pic" src={profileData.picture} alt="image not found" />
          <p>{profileData.name}</p>
          <button onClick={logOut}>Log out</button>
        </div>
       }
      
    </div>
  );
};

export default Login;