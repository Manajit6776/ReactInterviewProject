import React from 'react'
import { Tag } from './Tag'
import '../App.css'

export const Taskcard = ({title, tags, handleDelete, index}) => {
  return (
    <div>
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                {
                  tags.map((tag, index) => (<Tag key={index} tagName={tag} selected={true}/>))
                }
            </div>
            <button className='task_delete' onClick={() => handleDelete(index)}><p>Delete</p></button>
        </div>
    </article>
    </div>
  )
}
