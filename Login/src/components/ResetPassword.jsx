import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/reset-password.css";
import passImage from "C:/Users/hp/Desktop/Internship Task/vehicle app/Login/src/components/pass1.jpg";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    console.log("Sending reset link to:", email);
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <div className="reset-left">
          <div className="reset-text">
            <img src={passImage} alt="Reset Password" className="reset-img" />
            <h2>Forgot Password?</h2>
            <p>No worries! Enter your email to reset.</p>
          </div>
        </div>

        <div className="reset-right">
          <h2 className="reset-title">Reset Password</h2>
          <p className="reset-subtitle">Enter your email to receive a reset link.</p>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button onClick={handleReset} className="reset-btn">
            Send Reset Link
          </button>

          <p className="back-to-login" onClick={() => navigate("/")}>
            ← Back to Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
