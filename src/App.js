import './App.css';
import Header from './myComponents/Header.js';
import {Todos} from './myComponents/Todos.js';
import {Footer} from './myComponents/Footer.js';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      srno:1,
      title:"Go to theater",
      desc:"You need to go to the theater to watch a movie.",
    },
    
    {
      srno:2,
      title:"Go to market",
      desc:"You need to go to the market and bring milk.",
    },
    
    {
      srno:3,
      title:"Go to college",
      desc:"You need to go to college to attend a lecture.",
    },
  ]);

  return (
    <>
      <Header title="My Todo List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  ); 
}

export default App;