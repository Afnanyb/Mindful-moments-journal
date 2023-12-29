import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h1 className="header__sign">Sign In</h1>
      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder=""
      />
      <label>Password</label>
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder=""
      />
      <button
        onClick={() => {
          // TODO:handel sign in
          navigate("/journal-entry");
        }}
      >
        Sign in{" "}
      </button>
    </>
  );
}

export default Home;
