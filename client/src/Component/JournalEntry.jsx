import { useState } from "react";
import "./JournalEntry.scss";

const moods = ["Sad", "Happy", "Frustrated", "Content", "Calm"]; // Fixed typo in "Content"

function JournalEntry() {
  const [entryText, setEntryText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);

  const handleInputChange = (e) => {
    setEntryText(e.target.value);
  };
  const handleMoodClick = (selectedMood) => {
    setSelectedMood(selectedMood);
  };
  const handleEntryClick = () => {
    // TODO: send journal entry and mood to server
    // based on http respose code choose behaviour refresh with conf or apology
  };

  return (
    <>
      <div>
        <div className="journal__mood">How are you feeling today?</div>
        <div className="mood-options">
          {moods.map((mood) => (
            <div
              key={mood}
              className={`mood-option ${
                selectedMood === mood ? "selected" : ""
              }`}
              onClick={() => handleMoodClick(mood)}
            >
              {mood}
            </div>
          ))}
        </div>
      </div>

      <div>
        <textarea
          value={entryText}
          onChange={handleInputChange}
          placeholder="Write your thoughts here..."
          maxLength={1000}
        />
        <button onClick={() => handleEntryClick()}>Save Entry</button>
      </div>
    </>
  );
}

export default JournalEntry;
