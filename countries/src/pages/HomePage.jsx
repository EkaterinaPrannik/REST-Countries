import axios from 'axios';
import {useEffect } from 'react';
import { ALL_COUNTRIES } from '../Api';
import ListCard from '../components/ListCard';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useNavigate } from 'react-router-dom';

const HomePage = ({countries,setCountries}) => {

    const navigate=useNavigate();

    useEffect(() => {
        if(!countries.length)
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, [countries.length]);

    return (
        <>
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
                    return (<Card key={country.name.common} onClick={()=>navigate(`country/${country.name.common}`)} {...countryInfo} />)
                })}
            </ListCard>
        </>
    );
}

export default HomePage;