import { useState } from 'react';
import './Box.css'


function Box({Question, Answer}){
    const [show, setShow] = useState(false);

    const handleShow = () => {
        show === false ? setShow(true) : setShow(false);
    }
    return(
        <>
        <div className="box">
            <h4 className='box_heading' onClick={handleShow}>{Question}<span>+</span></h4> 
            <div className='box_content'>{show ? <p>{Answer}</p> : null}</div>
        </div>
        </>
    );
}

export default Box;