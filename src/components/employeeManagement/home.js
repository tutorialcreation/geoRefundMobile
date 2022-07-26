import React from "react";
import { Outlet, Link } from "react-router-dom";
import ListEmployees from "./listEmployees";

const EmployerDashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEmployee">Add Employee</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>

      <Outlet />
      <ListEmployees/>
     
    </>
  )
};

export default EmployerDashboard;