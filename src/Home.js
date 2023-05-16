import { useState, useContext, useEffect } from 'react';
import { LoginContext } from "./auth/LoginProvider";
import axios from 'axios';
import UsersList from "./users/UsersList";

const Home = () => {
    const { isLoggedIn, isUser } = useContext(LoginContext);
    //need to change below since it always call the api even whennnot logged
    const [users, setUsers] = useState(null);
    // let { , data:  } = useFetch('http://localhost:3001/users');

    useEffect(() => {
        if (isUser) {
            axios.get('http://localhost:3001/users')
              .then(response => {
                setUsers(response.data);
              })
              .catch(error => {
                console.error(error);
              });
          }
        // { error:u_error, isPending:u_isPending, data: users } = useFetch('http://localhost:3001/users');
    }, [isUser]);
    
    return ( 
        <div className="home">
            {isUser ? (
                        <div>THIS IS A USER</div>
 
                ) : (
                    <div className="">THIS IS NOT A USER</div>
                )
            }
            {(isLoggedIn && isUser && users) ? (
                        <UsersList users={users}/>
 
                ) : (
                    <div className=""></div>
                )
            }
        </div>
     );
}
 
export default Home;