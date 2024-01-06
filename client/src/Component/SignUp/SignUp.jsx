import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signuppassword, setSignupPassword] = useState("");
  const [signupName, setSignuptName] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="container">
      <div className="container__form">
        <h1 className="container__header">Sign Up</h1>
        <label>Name</label>
        <input
          value={signupName}
          onChange={(e) => setSignuptName(e.target.value)}
          placeholder="write your name..."
        />
        <label>Password</label>
        <input
          value={signuppassword}
          type="password"
          onChange={(e) => setSignupPassword(e.target.value)}
          placeholder="create password..."
        />
        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="rewrite password..."
        />
        <button
          onClick={async () => {
            try {
              await axios.post("http://localhost:8080/sign-up", {
                name: signupName,
                password: signuppassword,
              });
              navigate("/journal-entry");
            } catch (error) {
              console.log(error);
              setError(error.response?.data || "An error occurred");
            }
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
