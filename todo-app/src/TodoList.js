import React, { useState } from "react";
import "./style.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 2, text: "Task 2", category: "todo" },
    { id: 1, text: "Task 1", category: "inProgress" },
    { id: 3, text: "Task 3", category: "done" },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTodo = (category) => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: newTask,
        category: category,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const moveTodo = (id, category) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, category } : todo))
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Input value"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={() => addTodo("todo")}>Add Todo</button>
      </div>
      <div className="d-flex flex-row">
        <div className="card">
          <div className="card-TOP">
            <h2>Todo</h2>
            <div className="card-body">
              <ul>
                {todos
                  .filter((todo) => todo.category === "todo")
                  .map((todo) => (
                    <li key={todo.id} className="task">
                      {todo.text}
                      <button onClick={() => moveTodo(todo.id, "inProgress")}>
                        Start
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-TOP">
            <h2>In Progress</h2>
            <div className="card-body">
              <ul>
                {todos
                  .filter((todo) => todo.category === "inProgress")
                  .map((todo) => (
                    <li key={todo.id} className="task">
                      {todo.text}
                      <button onClick={() => moveTodo(todo.id, "done")}>
                        Finish
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-TOP">
            <h2>Done</h2>
            <div className="card-body">
              <ul>
                {todos
                  .filter((todo) => todo.category === "done")
                  .map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
