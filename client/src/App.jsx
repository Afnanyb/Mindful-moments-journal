import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import JournalEntry from "./Component/JournalEntry/JournalEntry";
import Home from "./Component/Home/Home";
import Goals from "./Component/Goalsetting/Goalsetting";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <Router>
      <nav>
        <a className="logo">MINDFUL</a>
        <div className="nav__items">
          <div className="nav__pages">
            <Link to="/">Home</Link>
            <Link to="/journal-entry">Journal </Link>
            <Link to="/goals">Goals</Link>
          </div>
          <div className="nav__signup">
            <Link to="/signup" className="nav__items--signup">
              SignUp
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal-entry" element={<JournalEntry />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
