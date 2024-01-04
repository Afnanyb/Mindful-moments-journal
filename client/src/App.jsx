import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { useState } from "react";

import JournalEntry from "./Component/JournalEntry/JournalEntry";
import Home from "./Component/Home/Home";
import Goals from "./Component/Goalsetting/Goalsetting";

function App() {
  return (
    <Router>
      <nav>
        <a className="logo">MINDFUL</a>
        <div className="nav__items">
          <Link to="/">Home</Link>
          <Link to="/journal-entry">Journal </Link>
          <Link to="/goals">Goals</Link>
        </div>
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
