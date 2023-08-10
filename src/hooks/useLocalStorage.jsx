import {useState, useEffect} from 'react'

export const useLocalStorage = (initialValue) => {
  const [searchedContent, setSearchedContent] = useState(()=>{
    const value = localStorage.getItem("todos");
    return value ? JSON.parse(value) : initialValue
  });

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(searchedContent))
  },[searchedContent])

  return [searchedContent, setSearchedContent]
}

