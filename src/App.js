import { useEffect, useState } from 'react';
import './App.css';

const factUrl = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';
function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    getDogFact();
  },[]);

  function getDogFact() {
    fetch(factUrl).then(f => {
      setFact(f);
    })
  }
  return (
    <div className="App">
      <h1 className="header">Dog facts</h1>
        <h3>{fact}</h3>
    </div>
  );
}

export default App;
