import { useNavigate } from "react-router-dom";
import "./JournalEntry.scss";
import { useState } from "react";

const moods = ["Sad", "Happy", "Frustrated", "Content", "Calm"];

function JournalEntry() {
  const [entryText, setEntryText] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  const handleInputChange = (e) => {
    setEntryText(e.target.value);
  };

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
  };

  const handleEntryClick = () => {
    // TODO: send journal entry and mood to server
  };

  return (
    <div className="journal__container">
      <div className="journal__mood">
        <div className="journal__mood--header">How are you feeling today?</div>
        <select
          className="mood-dropdown"
          value={selectedMood}
          onChange={handleMoodChange}
        >
          <option value="" disabled>
            Select your mood
          </option>
          {moods.map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
      </div>
      <textarea
        value={entryText}
        onChange={handleInputChange}
        placeholder="Write your thoughts here..."
        maxLength={1000}
      />
      <button onClick={handleEntryClick}>Save Entry</button>
    </div>
  );
}

export default JournalEntry;
