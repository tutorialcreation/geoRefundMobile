import React from "react";
import { Outlet, Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/claimPayment">Claim Payment</Link>
          </li>
          <li>
            <Link to="/getFeedback">Get Feedback</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default EmployeeDashboard;