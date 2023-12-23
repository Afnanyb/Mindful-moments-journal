import { useState } from "react";
import "./JournalEntry.scss";

function JournalEntry() {
  const [entryText, setEntryText] = useState("");

  const handleInputChange = (e) => {
    setEntryText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={entryText}
        onChange={handleInputChange}
        placeholder="Write your thoughts here..."
        maxLength={1000}
      />
      <button>Save Entry</button>
    </div>
  );
}

export default JournalEntry;
