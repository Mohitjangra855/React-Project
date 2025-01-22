import React, { useState } from "react";

const TodoInput = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // For shortcut click enter button then added todo
  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      props.todoInput(value);
      setValue("");
    }
  };

  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="Enter a todo item"
        value={value}
        onChange={handleChange}
        onKeyDown={handlePressEnter}
      />
      <button
        onClick={() => {
          props.todoInput(value);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
