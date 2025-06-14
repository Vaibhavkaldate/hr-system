import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import RateReviewIcon from "@mui/icons-material/RateReview"; 
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import logo from "../assets/logo.png";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Incident Report", icon: <ReportProblemIcon />, path: "/incident-report" },
  { text: "Feedback", icon: <RateReviewIcon />, path: "/feedback" }, 
  { text: "About Us", icon: <InfoIcon />, path: "/about-us" },
  { text: "Support and Help", icon: <HelpIcon />, path: "/support-help" },
  { text: "Logout", icon: <ExitToAppIcon />, path: "/logout" },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#0D47A1",
          color: "white",
        },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <img src={logo} alt="Mahyco Grow" style={{ width: "180px", height: "auto" }} />
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.text}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
