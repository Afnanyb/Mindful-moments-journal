import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <form className="container__form">
        <h1 className="container__header">Sign Up</h1>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="write your name..."
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="create password..."
        />
        <label>Confirm Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="rewrite password..."
        />
        <button
          onClick={() => {
            // TODO:handel sign in
            navigate("/journal-entry");
          }}
        >
          Sign Up
        </button>
      </form>
      {/* Sign in section */}

      <form className="container__form">
        <h1 className="container__header">Sign In</h1>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="write your name..."
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password..."
        />
        <button
          onClick={() => {
            // TODO:handel sign in
            navigate("/journal-entry");
          }}
        >
          Sign in{" "}
        </button>
      </form>
    </div>
  );
}

export default Home;
