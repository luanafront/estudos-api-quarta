import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/card';

function App() {
  const [apiData, setApiData] = useState(null)
  
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
      let data = res.data
      setApiData(data)
    })
  }, [])
  return (
    apiData === null ? 
    <p>Carregando</p> :
    <div className="App">
      <header className="App-header">
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

