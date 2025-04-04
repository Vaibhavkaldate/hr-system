import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const EmployeeSidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "#1565c0", // Sidebar Background
          color: "#fff",
        },
      }}
    >
      {/* Welcome Section with Matching Navbar UI */}
      <Box
        sx={{
          backgroundColor: "#0d47a1", // Darker Blue (Navbar Matching)
          padding: "15px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Welcome </Typography>
      </Box>

      {/* Sidebar Navigation */}
      <List>
        <ListItem button onClick={() => navigate("/employees-dashboard/home")}>
          <ListItemIcon><HomeIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => navigate("/employees-dashboard/profile")}>
          <ListItemIcon><AccountCircleIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button onClick={() => navigate("/employees-dashboard/documents")}>
          <ListItemIcon><DescriptionIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Documents" />
        </ListItem>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon><ExitToAppIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default EmployeeSidebar;
