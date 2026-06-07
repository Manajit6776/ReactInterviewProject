import React, {useState} from 'react'
import './Card.css'

const Card = ({id, image, title, symbol}) => {
    const[show, setShow] = useState(false);

    const handleShow = (e) =>{
        setShow(true);
    }
    const handleHide = (e) => {
        setShow(false);
    }

  return (
    <div className='item' key={id}  
    onMouseOver={handleShow} 
    onMouseLeave={handleHide}>
        <img src={image} alt={symbol} className='iamge' />
                {show ?  <p>{title}</p> : <p>{title.slice(0,20)}</p>}
        </div>
  )
}

export default Card