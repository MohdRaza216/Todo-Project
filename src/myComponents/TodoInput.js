import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const TodoInput = ({ addTodo }) => {
    const [task, setTask] = useState("");

    const handleInputChange = (e) => setTask(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            addTodo(task);
            setTask("");
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="todo-form">
            <Form.Group controlId="todoInput">
                <Form.Control
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={handleInputChange}
                    required
                    className="todo-input"
                />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 mt-3 todo-submit">
                Add Todo
            </Button>
        </Form>
    );
};
TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default TodoInput;
