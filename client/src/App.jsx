import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
// import Navbar from './components/Navbar';
import JournalEntry from "./Component/JournalEntry";
// import MoodTracker from './components/MoodTracker';
// import GoalSetting from './components/GoalSetting';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" exact component={MoodTracker} /> */}
        <Route path="/journal-entry" element={<JournalEntry />} />
        {/* <Route path="/goals" component={GoalSetting} /> */}
      </Routes>
    </Router>
  );
}

export default App;
