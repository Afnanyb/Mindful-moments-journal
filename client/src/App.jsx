import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import JournalEntry from "./Component/JournalEntry";
import Home from "./Component/Home/Home";
import { useState } from "react";

// import GoalSetting from "./components/GoalSetting";
function Goals() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);
  function addGoal() {
    setGoals((s) => [...s, goal]);
    setGoal("");
  }
  return (
    <>
      <h1>Set your goal for the next week!</h1>
      <input
        placeholder="Type your goal here "
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={addGoal}>+</button>
      {goals.map((goal) => (
        <div className="goal__row" key={goal}>
          <input type="checkbox" />
          <label> {goal} </label>
          <button onClick={() => setGoals((s) => s.filter((x) => x !== goal))}>
            X
          </button>
        </div>
      ))}
    </>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/journal-entry">Journal Entry </Link>
        <Link to="/goals"> Goals </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal-entry" element={<JournalEntry />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </Router>
  );
}

export default App;
