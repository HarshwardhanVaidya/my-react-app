import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <ul>
      <li>
        <Link to="/profile/myaccount">MyAccount</Link>
      </li>
      <li>
        <Link to="/profile/updateaccount">UpdateAccount</Link>
      </li>
      <Outlet />
    </ul>
  );
};

export default Profile;
