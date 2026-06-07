import React from 'react';
import './Input.css';

const Input = () => {
  return (
    <div className='input_box'>
      <form action="" className='form'>
        <input id='Question' type="text" placeholder='Question'/>
        <br />
        <input id='Answer' type="text" placeholder='Answer'/>
        <div className='submit'>
          <button type='submit' className='submit-btn'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Input