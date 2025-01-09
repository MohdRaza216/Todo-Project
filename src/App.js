import React, { useState, useEffect } from "react";
import TodoInput from "./myComponents/TodoInput.js";
import TodoList from "./myComponents/todoList.js";
import "./App.css";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

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
      <header className="header">
        <h1>Todo List</h1>
      </header>

      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-lg">
              <Card.Body>
                <TodoInput addTodo={addTodo} />
                {todos.length > 0 ? (
                  <TodoList
                    todos={todos}
                    toggleComplete={(id, completed) => toggleComplete(id, completed)}
                    deleteTodo={deleteTodo}
                  />
                ) : (
                  <p className="text-center text-muted">No todos yet! Add one above.</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
