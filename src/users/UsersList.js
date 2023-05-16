import { Link } from 'react-router-dom';


const UsersList = ({ users }) => {


  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-preview" key={user.id} >
          <Link to={`/users/${user.id}`}>
            <h2>{ user.id }</h2>
            <p>Written by { user.email }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default UsersList;