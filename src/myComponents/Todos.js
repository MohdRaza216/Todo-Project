import React from 'react'
import PropTypes from 'prop-types';
import { TodoItem } from "../myComponents/TodoItem.js";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className="text-center"> Todo List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} />
        })}

    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};