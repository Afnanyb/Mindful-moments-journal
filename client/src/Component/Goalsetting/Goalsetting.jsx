import "./Goalsetting.scss";
import React, { useState } from "react";

function Goals() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    setGoals((prevGoals) => [...prevGoals, goal]);
    setGoal("");
  };

  return (
    <div className="goals-container">
      <h1 className="goals-title">Set your goals for the next week!</h1>
      <div className="input-container">
        <input
          className="goal-input"
          placeholder="Type your goal here"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button className="add-goal-btn" onClick={addGoal}>
          Add Goal
        </button>
      </div>
      {goals.map((goalItem, index) => (
        <div className="goal-row" key={index}>
          <input type="checkbox" className="goal-checkbox" />
          <label className="goal-label">{goalItem}</label>
          <button
            className="remove-goal-btn"
            onClick={() =>
              setGoals((prevGoals) => prevGoals.filter((x) => x !== goalItem))
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Goals;
