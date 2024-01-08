import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Home.scss";

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <div className="container__form">
        <h1 className="container__header">Sign In</h1>
        <label htmlFor="name"> Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="write your name..."
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password..."
        />
        <button
          onClick={async () => {
            try {
              await axios.post("http://localhost:8080/sign-in", {
                name,
                password,
              });
            } catch (error) {
              console.log(error);
              setError(error);
            }
          }}
        >
          Sign in
        </button>
        <div className="error"> {error?.message}</div>
      </div>
    </>
  );
}

export default Home;
