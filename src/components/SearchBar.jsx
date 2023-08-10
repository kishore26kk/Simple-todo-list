/* eslint-disable react/prop-types */
import './App.css';
import {useEffect, useState} from 'react';
const SearchBar = ({ addHandler}) => {
  const [content, setContent] = useState("");

  const addButtonHandler = () =>{
    if(content.trim().length === 0) return;
    addHandler(content);
    setContent("");
  } 
  
  useEffect(()=>{
    const handleEventListener = (e) =>{
      if(e.key==='Enter'){
        if(content.trim().length === 0) return;
        addHandler(content);
        setContent("");
      }
    }
    document.addEventListener('keydown',handleEventListener);
    return ()=>{
      document.removeEventListener('keydown',handleEventListener);
    }
  },[addHandler,content])

  return (
    <>
    <input className="input" 
    value={content}
    type="text" 
    placeholder="Add New" 
    onChange={(e)=>setContent(e.target.value)}/>
    <button className="button" onClick={addButtonHandler}>Add</button>
    </>
  )
}

export default SearchBar