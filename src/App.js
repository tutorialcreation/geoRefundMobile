
import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployerDashboard from "./components/employeeManagement/home";
import EmployeeDashboard from "./components/employeeActions/home";
import AddEmployee from "./components/employeeManagement/addEmployee";
import ListEmployees from "./components/employeeManagement/listEmployees";
import RemoveEmployee from "./components/employeeManagement/removeEmployee";
import Pay from "./components/employeeManagement/payEmployee";
import CheckCompliance from "./components/employeeManagement/checkCompliance";
import Dashboard from "./components/dashboard/home";
import ClaimPayment from "./components/employeeActions/claimPayment";
import GetFeedback from "./components/employeeActions/getFeedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="admin" element={<EmployerDashboard />} />
          <Route path="employee" element={<EmployeeDashboard />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="listEmployee" element={<ListEmployees />} />
          <Route path="removeEmployee" element={<RemoveEmployee />} />
          <Route path="pay" element={<Pay />} />
          <Route path="checkCompliance" element={<CheckCompliance />} />
          <Route path="claimPayment" element={<ClaimPayment />} />
          <Route path="getFeedback" element={<GetFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}
