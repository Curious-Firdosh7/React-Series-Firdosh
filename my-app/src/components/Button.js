import React from 'react'
import './Button.css';
const   Button = () => {
  function clickHandler(){
    console.log("Clicked");
  }
  return ( 
    <button className='button' onClick={clickHandler}> Add To Cart </button>
  );
} 

export default Button;
