import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const inputHandler = (fieldname, value) => {
    // const { name, value } = e.target;
    // console.log(name, value);
    const newUser = { ...user, [fieldname]: value };
    setUser(newUser);
    // name - field name ;
    // value
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/user", user);
      toast.success(response.data.message, { position: "bottom-right" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            onChange={(event) => {
              inputHandler("name", event.target.value);
            }}
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
            onChange={(event) => {
              inputHandler("email", event.target.value);
            }}
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
            onChange={(event) => {
              inputHandler("address", event.target.value);
            }}
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

export default AddUser;
