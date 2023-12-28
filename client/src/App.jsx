import {
  useNavigate,
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import { useState } from "react";
// import Navbar from './components/Navbar';
import JournalEntry from "./Component/JournalEntry";

// import MoodTracker from './components/MoodTracker';
// import GoalSetting from './components/GoalSetting';
function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <box>
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
    </box>
  );
}
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="/journal-entry">Journal Entry </Link>
        <Link to="/goals"> Goals </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal-entry" element={<JournalEntry />} />
        <Route path="/goals" element={<div> Goals</div>} />
      </Routes>
    </Router>
  );
}

export default App;
