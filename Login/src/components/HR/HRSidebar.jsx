import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const HRSidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "#1565c0",
          color: "#fff",
        },
      }}
    >
      {/* Sidebar Header */}
      <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#1565c0" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Welcome HR</Typography>
      </div>

      <List>
        <ListItem button onClick={() => navigate("/hr-dashboard/home")}>
          <ListItemIcon><HomeIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => navigate("/hr-dashboard/manage-employees")}>
          <ListItemIcon><PeopleIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Manage Employees" />
        </ListItem>
        <ListItem button onClick={() => navigate("/hr-dashboard/document-verification")}>
          <ListItemIcon><AssignmentTurnedInIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Document Verification" />
        </ListItem>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon><ExitToAppIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default HRSidebar;
