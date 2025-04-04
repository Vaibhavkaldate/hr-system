import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import HRDashboard from "./components/HR/HRDashboard";
import EmployeesDashboard from "./components/Employees/EmployeesDashboard";
import Home from "./components/Employees/Home";
import Profile from "./components/Employees/Profile";
import ManageDocuments from "./components/Employees/ManageDocuments";
import HRHome from "./components/HR/Home";
import ManageEmployees from "./components/HR/ManageEmployees";
import DocumentVerification from "./components/HR/DocumentVerification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* ✅ HR Dashboard Parent Route */}
      <Route path="/hr-dashboard/*" element={<HRDashboard />}>
        <Route path="home" element={<HRHome />} />
        <Route path="manage-employees" element={<ManageEmployees />} />
        <Route path="document-verification" element={<DocumentVerification />} />
      </Route>

      {/* ✅ Employees Dashboard Parent Route */}
      <Route path="/employees-dashboard/*" element={<EmployeesDashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="documents" element={<ManageDocuments />} />
      </Route>
    </Routes>
  );
}

export default App;
