/* eslint-disable react/prop-types */
import {useState, useRef} from 'react'

const TaskList = ({item,removeItem}) => {
  const [finished, setFinished] = useState(false);
  const finishTaskHandler = () =>{
    setFinished(prev => !prev);
  }

  return (
    <>
    <li className={`list${finished ? "-selected" : ""}`}>
        {item} 
        <div>
          <button className="finishBtn" onClick={finishTaskHandler}>&#10003;</button>
          <button className="closeBtn" onClick={()=>removeItem(item)}>&times;</button>
        </div>
    </li>
    </>
  )
}

export default TaskList