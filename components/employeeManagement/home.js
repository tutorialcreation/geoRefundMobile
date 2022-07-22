
import { Outlet, Link } from "react-router-dom";
import listEmployees from "./listEmployees";

const employerDashboard = () => {
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
      <listEmployees/>
     
    </>
  )
};

export default employerDashboard;