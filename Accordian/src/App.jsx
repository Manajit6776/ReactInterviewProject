import { useState } from 'react'
import './App.css'
import Box from './components/Box';
import Input from './components/Input';
import data from '../public/data';

function App() {


  return (
    <div className='section'>
    <div className='input-section'>
      <Input/>
    </div>
    <div className='main-section'>
      {data.map(d => <Box key={d.id} Question={d.Question} Answer={d.Answer}/>)}
    </div>
    </div>
  )
}

export default App
