import React from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <ListGroup variant="flush">
            {todos.map((todo) => (
                <ListGroup.Item
                    key={todo._id}
                    className="todo-item d-flex justify-content-between align-items-center"
                >
                    <Form.Check
                        type="checkbox"
                        label={todo.task}
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo._id, !todo.completed)}
                        className="todo-checkbox"
                    />
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteTodo(todo._id)}
                        className="todo-delete-btn"
                    >
                        <FaTrash />
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            task: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
