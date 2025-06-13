import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Logout from "./components/Logout";
import SupportHelp from "./components/SupportHelp";
import Feedback from "./components/Feedback";
import IncidentReport from "./components/Incident Report";

import { BookingProvider } from "./components/context/BookingContext";


const App = () => {
  return (
    <BookingProvider>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/incident-report" element={<IncidentReport />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/support-help" element={<SupportHelp />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </BookingProvider>
  );
};

export default App;
