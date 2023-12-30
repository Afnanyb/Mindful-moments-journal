import { useState } from "react";
import "./JournalEntry.scss";

const moods = ["Sad", "Happy", "Frustrated", "Content", "Calm"];

function JournalEntry() {
  const [entryText, setEntryText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);

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
    <>
      <div className="container">
        <div className="journal__mood">How are you feeling today?</div>
        <select
          className="mood-dropdown"
          value={selectedMood || ""}
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
      <button onClick={() => handleEntryClick()}>Save Entry</button>
    </>
  );
}

export default JournalEntry;
