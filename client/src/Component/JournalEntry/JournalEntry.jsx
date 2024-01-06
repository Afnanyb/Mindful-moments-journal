import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./JournalEntry.scss";

const moods = [
  "Joy",
  "Sadness",
  "Anger",
  "Fear",
  "Contentment",
  "Happy",
  "Guilt",
  "Calm",
  "Anxiety",
  "Loneliness",
  "Frustration",
  "Love",
];

function JournalEntry() {
  const [entryText, setEntryText] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);
  const navigate = useNavigate();

  const fetchEntries = async () => {
    try {
      const response = await axios.get("http://localhost:8080/journalentries/");
      setJournalEntries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEntries();
  }, []);

  const handleInputChange = (e) => {
    setEntryText(e.target.value);
  };

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
  };
  // entry function
  const handleEntryClick = async () => {
    try {
      const userId = "userId";
      const postbody = {
        entryText,
        mood: selectedMood,
        userId,
      };
      console.log({ postbody });

      const r = await axios.post(
        "http://localhost:8080/journalentry",
        postbody
      );
      await fetchEntries();
      // Clear input fields
      setEntryText("");
      setSelectedMood("");
    } catch (error) {
      console.log(error);
    }
  };
  // edit function
  const handleEditClick = async (entryId) => {
    const editedText = prompt("Edit your entry:", entryText);
    if (editedText !== null) {
      try {
        await axios.put(`http://localhost:8080/journalentries/${entryId}`, {
          entryText: editedText,
          mood: selectedMood,
        });

        const response = await axios.get(
          `http://localhost:8080/journalentries/${userId}`
        );
        setJournalEntries(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // delete function
  const handleDeleteClick = async (entryId) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await axios.delete(`http://localhost:8080/journalentries/${entryId}`);
        await fetchEntries();
      } catch (error) {
        console.log(error);
      }
    }
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
        className="entry-textarea"
        value={entryText}
        onChange={handleInputChange}
        placeholder="Write your thoughts here..."
        maxLength={1000}
      />
      <button className="save-entry-button" onClick={handleEntryClick}>
        Save Entry
      </button>

      {/* Display entries */}
      <div className="journal__entries">
        {journalEntries.map((entry) => (
          <div className="entry" key={entry.id}>
            <p className="entry-text">{entry.journalentry}</p>
            <p className="entry-mood">Mood: {entry.mood}</p>
            <button onClick={() => handleEditClick(entry.id)}>Edit</button>
            <button onClick={() => handleDeleteClick(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JournalEntry;
