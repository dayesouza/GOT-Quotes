import { useEffect, useState } from 'react';
import './App.css';

const factUrl = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';
function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    getFactFromUrl();
  },[]);

  function getFactFromUrl() {
    fetch(factUrl)
    .then(async response => {
      return response.json();
    })
    .then((data) => {
      setFact(data)
      console.log(data)
    })

  }
  return (
    <div className="App">
      <h1 className="header">Game of Thrones Quotes</h1>
      {fact && (
        <>
          <h3>{fact.sentence}</h3>
          <small>- {fact.character.name}</small>
        </>
      )}
    </div>
  );
}

export default App;
