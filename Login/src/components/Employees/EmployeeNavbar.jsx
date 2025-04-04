import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const EmployeeNavbar = () => {
  return (
    <AppBar position="fixed" sx={{ width: "calc(100% - 250px)", ml: "250px", bgcolor: "#1565c0" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Employee Dashboard</Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default EmployeeNavbar;
