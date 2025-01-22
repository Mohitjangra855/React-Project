import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [err, setErr] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodos = (e) => {
    if (e !== "") {
      setTodos([...todos, e]);
    } else {
      setErr("Plz enter something in input field!");
    }
  };
  const handleDelete = (key) => {
    const newTodo = [...todos];
    newTodo.splice(key, 1);
    setTodos(newTodo);
  };
  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr(""); // Clear the error after 2 seconds
      }, 2000);

      // Cleanup timer if error changes before 2 seconds
      return () => clearTimeout(timer);
    }
  }, [err]);
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoInput todoInput={handleTodos} />
      <h1>Todo List</h1>
      <hr />
      {todos.map((item, i) => {
        return (
          <TodoList key={i} todo={item} index={i} handleDelete={handleDelete} />
        );
      })}
      <p>{err}</p>
    </div>
  );
}

export default App;
