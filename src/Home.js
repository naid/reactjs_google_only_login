import { useState, useContext, useEffect } from 'react';
import { LoginContext } from "./auth/LoginProvider";
import Eula from "./content/Eula";

const Home = () => {
    const { isLoggedIn, isUser, errorStatus } = useContext(LoginContext);
    console.log("kaiSarioN", isLoggedIn, isUser, errorStatus);
    return ( 
        <div className="home container mx-auto">
            {isUser ? (
                    <div>THIS IS A USER
                    </div>
                    
 
                ) : (
                    <div className="">THIS IS NOT A USER</div>
                )
            }
            {(isLoggedIn && !isUser ) &&
                <div className="centered content-center">
                    L{isLoggedIn}L,
                    U{isUser}U,
                    E{errorStatus}E,
                    <Eula />
                </div>
            }
            
        </div>
     );
}
 
export default Home;