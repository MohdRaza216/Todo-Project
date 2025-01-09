import React from "react";
import PropTypes from "prop-types";

function TodoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo._id} className={todo.completed ? "completed" : ""}>
                    <button
                        onClick={() => toggleComplete(todo._id, !todo.completed)}
                        onKeyUp={(e) => { if (e.key === 'Enter') toggleComplete(todo._id, !todo.completed); }}
                        tabIndex="0"
                    >
                        {todo.task}
                    </button>
                    <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            task: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
