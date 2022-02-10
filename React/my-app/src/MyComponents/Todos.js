import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight : "70vh",
    margin : "40px auto"
    
  }
  return <div className='container my-3' style={myStyle}>
    <h3 className="text-center my-3">Todos List</h3>
    
    {props.todos.length === 0 ? <div class="alert alert-success text-center" role="alert">
    No todos to Display
    </div> :
      props.todos.map((todo) => {

        return( 
          <>
           <TodoItem todos={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
          </>
       
        )
      })}
  </div>;
};
