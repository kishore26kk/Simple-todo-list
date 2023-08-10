/* eslint-disable react/prop-types */
import TaskList from "./TaskList"
const Task = ({content, removeItem}) => {
  return (
    <ul className="list-class">
        {content.map(item=> <TaskList item={item} key={item} removeItem={removeItem}/>)}
    </ul>
  )
}

export default Task