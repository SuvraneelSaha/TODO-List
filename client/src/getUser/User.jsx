// we will be creating a functional component 

import React from 'react'
import "./user.css";

const User = () => {
  return (
    <div className='userTable'>
      <button type="button" class="btn btn-primary">Add User</button>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>
              Serial No.
            </th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Address</th>
            <th scope='col'>Actions</th>
            {/* Actions - for buttons  */}

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>Canada</td>
            <td>Update | Delete</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default User;
// this above const User -- it is a functional component 
// we need to add this User.jsx into the App.js 