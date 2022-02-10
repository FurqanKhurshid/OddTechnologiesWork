import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState,useEffect } from 'react';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions'
function App() {

 

  

  const [todo, setTodo] = useState();
 

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo("")
    
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));

  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='my-3'>Todo list App Using Redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter a Todo'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: 'none',
              fontSize: 20,
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit'
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}>Go</button>
        </form>
        {todos.length === 0 ? <div class="alert alert-success text-center my-5" role="alert">
          No Todos To Display
        </div> :
          <ul className='allTodo'>
            {
              todos &&
              todos.map((t) => (
                <li key={t.id} className='singleTodo'>


                  <span className='todoText'>{t.todo}</span>
                  <button style={{
                    borderRadius: 25,
                    padding: 10,
                    border: '1px solid white',
                    color: 'white',
                    backgroundColor: 'orangered',
                  }}
                    onClick={() => removeHandler(t)}
                  >
                    Delete
                  </button>
                </li>

              ))
            }


          </ul>}

      </header>
    </div>
  );
}

export default App;
