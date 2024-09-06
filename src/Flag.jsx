import React, { useState, useEffect } from 'react';
import CountryCard from './countycard.jsx';

function Flag() {
  const [countries, setCountries] = useState([]);
  const API_ENDPOINT = 'https://xcountries-backend.azurewebsites.net/all';

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(`Error fetching data: ${error.message}`));
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {countries.map(country => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
}

export default Flag;