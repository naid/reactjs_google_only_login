import { useContext, useState, Suspense, useEffect } from 'react';
import { useLogin, useLoginUpdate } from "./auth/LoginProvider";
import axios from 'axios';
import Eula from "./content/Eula";

// const Eula = lazy(() => wait(2000).then(import("./content/Eula")))

// function wait(time) {
//     return new Promise(resolve => {
//         setTimeout (resolve, time)
//     })
// }


const Home = () => {
    const { isLoggedIn, isUser, profile, errorStatus } = useLogin();
    const { setUser } = useLoginUpdate()
    const [checked, setChecked] = useState(false)
    const [showEula, setShowEula] = useState(false)

    const addEmail = async (email, first_name, last_name) => {
        if(typeof email !== "undefined") {
        // } else {
            try {
                const response = await axios.post('http://localhost:3001/add-email/', { email, first_name, last_name })
                  .then((response) => {
                    setUser(true)
                    alert('done')
                    setShowEula(false)

                  }, (error) => {
                    alert('error')
                  }
                );
              } catch (error) {
                console.log("ERROR: LoginProvider 60");
                alert(error)
                console.log(error); // logs "Email exists in database" or "Email does not exist in database"
              }

        }
      };

    const handleChange = () => {
        setChecked(!checked);
        
    };
    // console.log("kaiSarioN", isLoggedIn, isUser, errorStatus);

    function acceptUser(){
        console.log(profile)
        addEmail(profile.email, profile.given_name, profile.family_name)
        
    }

    useEffect(() => {

        if(isLoggedIn && !isUser && errorStatus !== 'ERR_BAD_RESPONSE' && errorStatus !== 'VERIFIED' && errorStatus !== 'RUNNING') {
            alert("SETTING BETING"+ errorStatus)
            setShowEula(true)
        }

    }, [isLoggedIn, isUser, errorStatus])

    return ( 
        <div className="home container mx-auto">
            {isUser ? (
                    <div>THIS IS A USER
                    </div>
                 ) : (
                    <div className="">THIS IS NOT A USER</div>
                )
            }
            {/* {(isLoggedIn && !isUser && errorStatus !== 'ERR_BAD_RESPONSE') ? ( */}
            {(showEula === true) ? (
                <div className="centered content-center">
                    L{isLoggedIn}L,
                    U{isUser}U,
                    E{errorStatus}E,
                    <p className="centered">
                        <input type="checkbox" onChange={() => handleChange()}/> I agree to the terms and conditions specified in this page.
                    </p>
                    <p className="centered">
                        <button className="
                            bg-green-500 
                            hover:bg-green-700 
                            text-white 
                            font-bold 
                            py-2 px-4 
                            rounded
                            disabled:opacity-25
                            " 
                            disabled={!checked}
                            onMouseDown={() => {acceptUser()}}
                        >
                            Accept & Continue
                        </button>
                    </p>
                    <Suspense fallback={<div>Loading Eula</div>}>
                        <Eula />
                    </Suspense>
                </div>
                ) : ( <div className="okay">OKAY</div> )
            }
            
        </div>
     );
}
 
export default Home;