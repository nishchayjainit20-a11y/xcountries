import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://xcountries-backend.labs.crio.do/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
  };

  return (
    <>
      <div style={containerStyle}>
        {countries.map((country) => (
          <div key={country.abbr} className="imageStyle">
            <img src={country.flag} alt={country.name} />
            <h2>{country.name}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
