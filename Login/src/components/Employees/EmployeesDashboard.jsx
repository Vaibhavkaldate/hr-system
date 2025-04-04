import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom"; // ✅ Import Outlet
import EmployeeSidebar from "./EmployeeSidebar";
import EmployeeNavbar from "./EmployeeNavbar";

const EmployeesDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <EmployeeSidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <EmployeeNavbar />
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Outlet />  {/* ✅ This will render the correct page inside EmployeesDashboard */}
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeesDashboard;
