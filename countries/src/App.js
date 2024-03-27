import axios from 'axios';
import { useState, useEffect } from 'react';

import './App.css';
import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { ALL_COUNTRIES } from './Api';
import ListCard from './components/ListCard';
import Card from './components/Card';

function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries)
  countries.map(country => console.log(country.population))
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({data} ) => setCountries(data))
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <ListCard>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name.common,
              info: [
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              }],
            };
            return (<Card  key={country.name.common} {...countryInfo} />)
          })}
        </ListCard>
        
      </Main>
    </>
  );
}

export default App;
