import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReadUserData, deleteUser } from "../Redux_work/slice";

const Read_page = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(ReadUserData());
  }, [dispatch]);

  if (loading) {
    return <center><h2 style={{ color: "white" }}>Loading...</h2></center>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="container">
      {user && user.map((data) => (
        <div key={data.id} className="text-center my-4" style={{ backgroundColor: "#f8f9fa"}}>
          <h2 className="mb-4">Your Id Is: {data.id}</h2>
          <hr />
          <h2 className="mb-4">Your Name Is: {data.name}</h2>
          <hr />
          <div className="card my-5" style={{ backgroundColor: "#f8f9fa", border: "none" }}>
            <div className="card-body" style={{ marginTop: "10px" }}>
              <h2 className="card-title">Your Email Is: {data.email}</h2>
              <hr />
              <h2 className="card-text">Your Gender Is: {data.gender}</h2>
              <hr />
              <Link to={`/Update/${data.id}`} className="btn btn-primary">Update</Link>
              &nbsp;&nbsp;
              <button 
                className="btn btn-danger" 
                onClick={() => dispatch(deleteUser(data.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Read_page;
