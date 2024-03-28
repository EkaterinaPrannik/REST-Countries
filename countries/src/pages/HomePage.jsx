import axios from 'axios';
import {useEffect, useState } from 'react';
import { ALL_COUNTRIES } from '../Api';
import ListCard from '../components/ListCard';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useNavigate } from 'react-router-dom';

const HomePage = ({countries,setCountries}) => {

    const [filterCountries,setFilterCountries] = useState(countries);

    const handleSearch = (search, region) => {
        let data = [...countries];
        if(region) {
            data = data.filter(country => country.region.includes(region))
        }
        if(search) {
            data = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilterCountries(data)
    };

    const navigate=useNavigate();

    useEffect(() => {
        if(!countries.length)
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, [countries.length]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <ListCard>
                {filterCountries.map((country) => {
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
                    return (<Card key={country.name.common} onClick={()=>navigate(`country/${country.name.common}`)} {...countryInfo} />)
                })}
            </ListCard>
        </>
    );
}

export default HomePage;