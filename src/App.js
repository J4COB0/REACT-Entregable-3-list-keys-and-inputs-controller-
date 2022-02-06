import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList';

function App() {

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  const [location, setLocation] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)+1}`)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <section className="headline">
        <h1>THE RICK AND MORTY API</h1>
      </section>
      <section className="main-container">
        <SearchBox 
          setLocation={setLocation}
        />
        <LocationInfo 
          location={location}
        />
        <ResidentList 
          residents={location.residents}
        />
      </section>
      <section className="footer">
      </section>
    </div>
  );
}

export default App;
