import React, { useState } from "react";
import "./App.css";

const App = () => {

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (e,option) => {
    e.stopPropagation();
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== option
    );
    setSelectedOptions(updatedOptions);
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Backspace" &&
      selectedOptions.length > 0
    ) {
      const lastOption = selectedOptions[selectedOptions.length - 1];
      handleRemoveOption(lastOption);
    }
  };

  return (
    <div className="multi-select-dropdown">
      <input
        type="text"
        placeholder="Select Dropdown"
        value=""
        onKeyDown={handleKeyDown}
      />
      <ul className="options-list">
        {options.map((option) => (
            <li key={option} onClick={(e) => handleOptionClick(e,option)}>
              {option}
            </li>
          ))}
      </ul>
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="selected-option"
            onClick={() => handleRemoveOption(option)}
          >
            {option} &#10006;
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
