import React from 'react';
import { Button } from 'react-bootstrap';

export const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <Button variant="danger" onClick={() => {onDelete(todo)}}>Delete</Button>
    </div>
  )
}