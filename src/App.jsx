import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/card';

function App() {
  const [apiData, setApiData] = useState(null)
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then((res) => {
      let data = res.data
      setApiData(data)
    })
  }, [page])
  
  const prevPage = () => {
    if( page > 0){
      setPage(page - 1)
    }
  }
  const nextPage = () => {
    setPage(page + 1)
  }
  
  return (
    apiData === null ? 
    <p>Loaging</p> :
    <div className="App">
      <header className="App-header">
      <div className="pageButtons">
        <button
          className="pageButtons__button--prev"
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className="pageButtons__button--next"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
        {apiData.results.map((data, index) => {
          return (
            <Card data={data} index={index}/>
          )
        })}
      </header>
    </div>
  );
}

export default App;

