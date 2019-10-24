import React from 'react';
import './UserTable.scss'; 

const UserDetails = props => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">S.no</th>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile</th>
        <th scope="col">Gender</th>
        <th scope="col">Profile</th>
        <th scope="col">Skills</th>
      </tr>
    </thead>
    <tbody>
    { props.userData ? props.userData.map((userData, index) => 
      <tr key={index}>
        <th scope="col">{index + 1}</th>
        <th scope="col">{userData.firstname}</th>
        <th scope="col">{userData.lastname}</th>
        <th scope="col">{userData.email}</th>
        <th scope="col">{userData.mobile}</th>
        <th scope="col">{userData.gender}</th>
        <th scope="col">{userData.profile}</th>
        <th scope="col">{userData.skills}</th>          
      </tr>
    ): ""}
    </tbody>
  </table> 
)

export default UserDetails;