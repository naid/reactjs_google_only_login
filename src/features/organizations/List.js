import React, { useState, useEffect } from 'react';
import { useLogin } from "../../auth/LoginProvider";
import axios from 'axios';

const List = () => {
  const { isLoggedIn, isUser, profile } = useLogin();
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetchData();
  }, [profile]);

  const fetchData = async () => {
    try {
      console.log(profile);
      const response = await axios.get('/organizations?email='+encodeURIComponent(profile.email));
      setOrganizations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Organizations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email { profile.email }</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((organization) => (
            <tr key={organization.id}>
              <td>{organization.name}</td>
              <td>{organization.address}</td>
              <td>{organization.phone}</td>
              <td>{organization.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
