import React, { useState, useEffect } from "react";
import useDebounce from "../hook/useDebounce";

const Search = () => {
  const [text, setText] = useState("");

  // debounced value (updates after delay)
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log("API Call for:", debouncedText);
    }
  }, [debouncedText]);

  return (
    <div>
      <h2>Search</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p>Debounced: {debouncedText}</p>
    </div>
  );
};

export default Search;