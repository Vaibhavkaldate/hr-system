import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom"; // ✅ Import Outlet
import HRSidebar from "./HRSidebar";
import HRNavbar from "./HRNavbar";

const HRDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar for HR Navigation */}
      <HRSidebar />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        {/* HR Navigation Bar */}
        <HRNavbar />
        <Toolbar />

        {/* ✅ Outlet will render the correct child route dynamically */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default HRDashboard;
