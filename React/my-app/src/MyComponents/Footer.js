import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position : "absolute",
    top:"100vh",
    width:"100%"
  }
  return <footer className='bg-dark text-light text-center py-3' style={{footerStyle}}>
      Copyright &copy; MyTodosList.com
  </footer>;
};
