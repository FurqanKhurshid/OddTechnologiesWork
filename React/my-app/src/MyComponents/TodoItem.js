import React from 'react';

export const TodoItem = ({todos,onDelete}) => {
 
  return <div className='container' style={{backgroundColor:"#F5F5F5"}}>
      {/* <h3>{todos.sno}</h3> */}
      <h3 style={{color:'#9E776D'}}>  {todos.sno}) {todos.title} </h3>
      <p style={{color:'#2F84EA'}}> {todos.desc} </p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
  </div>;
};
