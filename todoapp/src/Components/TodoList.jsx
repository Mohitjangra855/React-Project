import React, { useState } from "react";
const TodoList = (props) => {
  const [check, setCheck] = useState(false);
// for shortcut delete todo
  const handlePressDelete = (e) => {
    if (e.key === "Delete") {
      props.handleDelete(props.index);
    }
  };

  return (
    <div className="todo_list">
      <h1 className={check ? "line-through" : " "}>{props.todo}</h1>
      <div className="buttons">
        <span
          onClick={() => {
            if (!check) {
              setCheck(true)
            } else {
              setCheck(false);
            }
          }}
        >
          <i className="fa-solid fa-eye"></i>
        </span>
        <span
          onClick={() => {
            props.handleDelete(props.index);
          }}
          onKeyDown={handlePressDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
};

export default TodoList;
