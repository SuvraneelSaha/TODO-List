// we will be creating a functional component

import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  // writing the code to fetch the data from the database ;
  // or we will be connecting the app with the backend

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };

    fetchData();
    // initiate the data fetching processing
  }, []);
  // here empty array means that the useEffect will run only once
  // users - current state of the component
  // setUsers - allows you to update the state stored in the users variables
  // useState() basically used to initialize the state variables as an empty array
  // useEffect is used to manage the sideeffect in the functional component

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:9000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        // the code will remove the user from the list of users by checking the
        // userIds from the provided particular userId
        toast.success(response.data.message, { position: "top-left" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userTable">
      <Link to="/add" type="button" class="btn btn-primary">
        Add User
        <i class="fa-solid fa-person-circle-plus addUserIcon"></i>
      </Link>
      {/* link for linking it to a route address */}

      {/* if no elements are left */}
      {users.length === 0 ? (
        <div className="noData">
          <h3>No data to display</h3>
          <p>Please add new User</p>
        </div>
      ) : 
      // otherwise return the below table
      (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Serial No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
              {/* Actions - for buttons  */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className="actionButtons">
                    <Link
                      to={`/update/` + user._id}
                      type="button"
                      class="btn btn-warning"
                    >
                      <i class="fa-solid fa-wrench"></i>
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      type="button"
                      class="btn btn-danger"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default User;
// this above const User -- it is a functional component
// we need to add this User.jsx into the App.js

// now we want the dynamic data from the db
// axios - js library for making http requests
