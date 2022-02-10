import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos"
import  AddTodo  from "./MyComponents/AddTodo"

import { Footer } from "./MyComponents/Footer"
import { About } from "./MyComponents/About"
import { TodoItem } from './MyComponents/TodoItem';
// import matchAll from 'string.prototype.matchall';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.getItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log("this is not working", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const MyTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, MyTodo]);
    // localStorage.getItem("todos", JSON.stringify(todos))

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
   <>
   <Router>
        {/* <Header title="My To Do List" searchbar={false} /> */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </>)
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>



        <Footer />
      </Router> 
      
      </>
  )



  /* return (
     <>
     <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
     <Footer />

     </>
   ) */
















}

export default App;
