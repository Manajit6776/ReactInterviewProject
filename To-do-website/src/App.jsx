import { useEffect, useState } from 'react'
import { TaskForm } from './Components/TaskForm';
import "./App.css";
import { TaskColumn } from './Components/TaskColumn';

const oldTask = localStorage.getItem("tasks");
console.log(oldTask);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task,index) => index !== taskIndex);
    setTasks(newTask);
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn key={'to-do'} title='To do' tasks={tasks} status="to-do" handleDelete={handleDelete}/>
        <TaskColumn key={'doing'} title='Doing' tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn key={'done'} title='Done' tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
