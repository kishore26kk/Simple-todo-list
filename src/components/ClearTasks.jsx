/* eslint-disable react/prop-types */
// import './App.css';
const ClearTasks = ({clear}) => {
  return (
    <button className="button" onClick={()=>clear()}>ClearTasks</button>
  )
}

export default ClearTasks