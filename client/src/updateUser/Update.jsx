import React, { useEffect, useState } from "react";
import "./Update.css";
import { Link, useNavigate ,useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
// we need to set the intial value of the form - using the url ; 
// we will be using useParams from the react router dom
  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const {id} = useParams();


  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:9000/api/user/${id}`)
    .then((response) => {
      setUser(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  },[id]);

  // why id - that the effect  will take place when the id variable changes  


  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:9000/api/update/user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // here the spread operator ... is used to copy the current value of user state and
  // then update the specified property of the new value

  // e is the event object which is triggerred by the event change

  // we need to use useState hook -- which is used to manage the userForm data
  // inputHandler function for handling the changes in the input field

  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-success">
        <i class="fa-solid fa-house"></i> Back
      </Link>

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail : </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            id="address"
            value={user.address}
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
