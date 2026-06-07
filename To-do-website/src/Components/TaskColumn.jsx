import React from 'react'
import { Taskcard } from './Taskcard'
import '../App.css'

export const TaskColumn = ({title, tasks, status, handleDelete}) => {
  
  return (
    <>
    <section className='task_column'>
        <h2>{title}</h2>
        {
          tasks.map((task, index)=>
            task.task_status == status && (
              <>  
              <Taskcard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>
              </>
            )
          )
        }
    </section>
    </>
  )
}
