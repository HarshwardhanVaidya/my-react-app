import React from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
