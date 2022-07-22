
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import employerDashboard from "../components/employeeManagement/home";
import employeeDashboard from "../components/employeeActions/home";
import addEmployee from "../components/employeeManagement/addEmployee";
import listEmployees from "../components/employeeManagement/listEmployees";
import removeEmployee from "../components/employeeManagement/removeEmployee";
import Pay from "../components/employeeManagement/payEmployee";
import checkCompliance from "../components/employeeManagement/checkCompliance";
import Dashboard from "../components/dashboard/home";
import claimPayment from "../components/employeeActions/claimPayment";
import getFeedback from "../components/employeeActions/getFeedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<employerDashboard />} />
          <Route path="employee" element={<employeeDashboard />} />
          <Route path="addEmployee" element={<addEmployee />} />
          <Route path="listEmployee" element={<listEmployees />} />
          <Route path="removeEmployee" element={<removeEmployee />} />
          <Route path="pay" element={<Pay />} />
          <Route path="checkCompliance" element={<checkCompliance />} />
          <Route path="claimPayment" element={<claimPayment />} />
          <Route path="getFeedback" element={<getFeedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);