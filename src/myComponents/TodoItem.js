import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <Button variant="danger" onClick={() => { onDelete(todo) }}>Delete</Button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
}; 
