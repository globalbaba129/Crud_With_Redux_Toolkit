import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
        WebSiteName
      </a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active">
        <Link to="/Add_Data">Add_Data</Link>
      </li>
      <li>
      <Link to="/Read_page">Read_page</Link>
      </li>
      <li>
      <Link to="/Add_Data">Add_Data</Link>
      </li>
    </ul>
    <form className="navbar-form navbar-left" action="/action_page.php">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          name="search"
        />
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search" />
          </button>
        </div>
      </div>
    </form>
  </div>
</nav>

   </>
  )
}

export default Navbar