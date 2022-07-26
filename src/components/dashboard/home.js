import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Dashboard;