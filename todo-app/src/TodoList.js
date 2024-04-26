import React, { useState } from "react";
import "./style.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [progress, setProgress] = useState([]);
  const [done, setDone] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleTodo = (e) => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleProgress = (e) => {
    if (inputValue.trim() !== "") {
      setProgress([...progress, inputValue]);
      setInputValue("");
    }
  };
  const handleDone = (e) => {
    if (inputValue.trim() !== "") {
      setDone([...done, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div class="card-top">
        <input
          type="text"
          placeholder="Input value"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={() => handleTodo()}>Add Todo</button>
        <button onClick={() => handleProgress()}>In progress</button>
        <button onClick={() => handleDone()}>Done</button>
      </div>
      <div className="d-flex flex-row">
        <div class="card">
          <div class="card-TOP">
            <h2>Todo</h2>
            <div calss="card-body"></div>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-TOP">
            <h2>Progress</h2>
            <div calss="card-body"></div>
            <ul>
              {progress.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-TOP">
            <h2>Done</h2>
            <div calss="card-body"></div>
            <ul>
              {done.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
