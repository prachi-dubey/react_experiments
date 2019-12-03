import React from 'react';
import './UserTable.scss'; 
import { UserConsumer } from '../UserContext.jsx'

const UserDetails = props => ( 
    <UserConsumer> 
      {
        (context,  name) => { 
          console.log(context);
          console.log(context.userData.firstname);
          
          // console.log(context.email);
          // console.log(context.state);        
          return <> 
            <table className="table table-bordered"> 
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
              {/* { context.userData.map((state, index) =>   */}
                  <tr>    {/* <tr key={index}> */}
                  <th scope="col">{1}</th>
                  <th scope="col">{context.userData.firstname}</th>
                  <th scope="col">{context.userData.lastname}</th>
                  <th scope="col">{context.userData.email}</th>
                  <th scope="col">{context.userData.mobile}</th>        
                </tr> 
               {/* )} */}
              </tbody>
            </table>
          </> 
        }
      }
    </UserConsumer>
)

export default UserDetails;
