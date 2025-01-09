import React, { useState, useEffect } from "react";
import TodoInput from "./myComponents/TodoInput.js";
import TodoList from "./myComponents/todoList.js";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the backend
  useEffect(() => {
    axios
      .get("/api/todos")
      .then((response) => setTodos(response.data))
      .catch((err) => console.error(err));
  }, []);

  const addTodo = (task) => {
    axios
      .post("/api/todos", { task })
      .then((response) => setTodos([...todos, response.data]))
      .catch((err) => console.error(err));
  };

  const toggleComplete = (id, completed) => {
    axios
      .put(`/api/todos/${id}`, { completed })
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, completed: response.data.completed } : todo
          )
        );
      })
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={(id, completed) => toggleComplete(id, completed)}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
