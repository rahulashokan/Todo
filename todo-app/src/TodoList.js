import React, { useState } from "react";
import "./style.css";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const dataMovements = (category, index) => {
    if (inputValue.trim() !== "") {
      switch (category) {
        case "todo":
          setTodoList([...todoList, inputValue]);
          break;
        case "inProgress":
          setInProgressList([...inProgressList, todoList[index]]);
          const newTodoList = [...todoList];
          newTodoList.splice(index, 1);
          setTodoList(newTodoList);
          break;
        case "done":
          setDoneList([...doneList, inProgressList[index]]);
          const newInProgressList = [...inProgressList];
          newInProgressList.splice(index, 1);
          setInProgressList(newInProgressList);
          break;
        default:
          break;
      }
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
        <button onClick={() => dataMovements("todo")}>Add Todo</button>
      </div>
      <div className="d-flex flex-row">
        <div class="card">
          <div class="card-TOP">
            <h2>Todo</h2>
            <div calss="card-body"></div>
            <ul>
              {todoList.map((todo, index) => (
                <li key={index}>
                  {todo}
                  {
                    <button onClick={() => dataMovements("inProgress", index)}>
                      Add In Progress
                    </button>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-TOP">
            <h2>Progress</h2>
            <div calss="card-body"></div>
            <ul>
              {inProgressList.map((todo, index) => (
                <li key={index} draggable>
                  {todo}
                  {
                    <button onClick={() => dataMovements("done", index)}>
                      Add Done
                    </button>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-TOP">
            <h2>Done</h2>
            <div calss="card-body"></div>
            <ul>
              {doneList.map((todo, index) => (
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
