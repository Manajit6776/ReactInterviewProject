import React,{useState} from 'react'
import '../App.css'
import { Tag } from './Tag'

export const TaskForm = ({setTasks}) => {
    const[taskData,setTaskData] = useState({
        task: "",
        task_status: "to-do",
        tags: []
    });
    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag);
    }
    const selectTag = (tag) =>{
        if(taskData.tags.some(item => item === tag)){ //some() is a higher-order-funtion, return boolean if at least one item match the condition 
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return{...prev, tags: filterTags}
            });
        }else{
            setTaskData(prev => {return{...prev, tags: [...prev.tags, tag]}})
        }
    }
    const handleChange = e =>{
        const {name, value} = e.target; //Object destructureing
        setTaskData(prev =>{
            return {...prev, [name] : value} 
            /*Computed property names, introduced in ES6, allow you to use expressions, variables,
            or function calls in square brackets [] as object keys within an object literal*/
        });
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData];
        });
        setTaskData({
            task: "",
            task_status: "to-do",
            tags: [],
        })
    }

    return (
        <header className='app_header'>
            <form>
                <input type="text" value={taskData.task} className='task_input' placeholder='Enter Your Task' 
                    name = 'task'
                    onChange={handleChange}/>
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag key={'HTML'} tagName='HTML' selectTag={selectTag} selected={checkTag("HTML")}/>
                        <Tag key={'CSS'}tagName='CSS' selectTag={selectTag} selected={checkTag("CSS")}/>
                        <Tag key={'JavaScript'} tagName='JavaScript' selectTag={selectTag} selected={checkTag("JavaScript")}/>
                        <Tag key={'React'} tagName='React' selectTag={selectTag} selected={checkTag("React")}/>
                    </div>
                    <div>
                        <select className='task_status' value={taskData.task_status} name='task_status' onChange={handleChange}>
                            <option value="to-do">To-do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit' onClick={handleSubmit}>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}