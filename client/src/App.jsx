import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
// import Navbar from './components/Navbar';
import JournalEntry from "./Component/JournalEntry";
// import MoodTracker from './components/MoodTracker';
// import GoalSetting from './components/GoalSetting';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="/journal-entry">Journal Entry </Link>
        <Link to="/goals"> Goals </Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/journal-entry" element={<JournalEntry />} />
        <Route path="/goals" element={<div> Goals</div>} />
      </Routes>
    </Router>
  );
}

export default App;
