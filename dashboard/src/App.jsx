import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Logout from "./components/Logout";
import SupportHelp from "./components/SupportHelp";
import Feedback from "./components/Feedback";
import Maintainance from "./components/Maintainance"; // ✅ Import Maintainance

import { BookingProvider } from "./components/context/BookingContext";
import "./styles/App.css";

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
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/maintainance" element={<Maintainance />} /> {/* ✅ Route */}
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
