import React, { useState } from "react";
import PropTypes from 'prop-types';

function TodoInput({ addTodo }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        addTodo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit">Add</button>
        </form>
    );
}
TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default TodoInput;
