import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserData } from "../Redux_work/slice";

const Add_Data = () => {
  const dispatch = useDispatch();
  const [Users, setUsers] = useState({});
  const nevigate = useNavigate(); 

  const getUserData = (e) => {
    setUsers({ ...Users, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    
    nevigate('/Read_page')
    // Dispatch the action and wait for it to complete
   dispatch(createUserData(Users));

  };

  return (
    <div className="container">
      <h2>Add Data Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={getUserData}
          />
        </div>

        {/* Age Input */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            id="age"
            placeholder="Enter your age"
            onChange={getUserData}
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={getUserData}
          />
        </div>

        {/* Gender Radio Buttons */}
        <div className="form-group">
          <label className="control-label">Choose Gender:&nbsp;&nbsp;&nbsp;</label>
          <div className="radio-inline">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={getUserData}
              />
              Male
            </label>
          </div>
          <div className="radio-inline">
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={getUserData}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Data
        </button>
      </form>
    </div>
  );
};

export default Add_Data;
