import { useLocalStorage } from '../hooks/useLocalStorage';
import Header from './Header';
import './App.css';
import SearchBar from './SearchBar';
import Footer from './Footer';
import Task from './Task';
import ClearTasks from './ClearTasks';

const App = () => {
  const [searchedContent, setSearchedContent] = useLocalStorage([]);

  const length = searchedContent.length;

  const addHandler = (content) =>{
    if(!searchedContent.includes(content)){
      setSearchedContent(item => [content,...item])
    }
  }

  const removeHandler = (item) =>{
    console.log(item)
    const filteredContent = searchedContent.filter((content) => content !== item);
    setSearchedContent(filteredContent);
  }

  const taskRemoveHandler = () => {
    setSearchedContent([])
  }

  
  return (
    <div className="app">
      <Header />
      <SearchBar addHandler={addHandler}/>
      <Task content={searchedContent} removeItem={removeHandler}/>
      <Footer length={length} />
      <ClearTasks clear={taskRemoveHandler}/>
    </div>
  )
}

export default App