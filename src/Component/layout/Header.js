import React from "react";
import {Link} from 'react-router-dom'

const Header = (props) => {
      const {logo} = props
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
            <div className="container">
                  <a style={{color: "#fff",fontSize:"40px"}} href="#">{logo}</a>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Home </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/add/contact" className="nav-link">Add Contact </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about/:4" className="nav-link">About </Link>
                   
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">About </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/test" className="nav-link">Test </Link>
                    </li>
                  </ul>
            </div>
</nav>
  )
     

                      
};

export default Header;
