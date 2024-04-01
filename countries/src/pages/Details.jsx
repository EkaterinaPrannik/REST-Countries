import axios from "axios";
import { useState,useEffect } from "react";
import {IoArrowBack} from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { seacrhByCountry } from "../Api";
import { Button } from "../components/Button";
import FullDataCard from "../components/FullDataCard";


const Details = () => {
    const params = useParams();
    const navigate = useNavigate();
    const countryName = params.name;
    const [country,setCountry] = useState(null);
    
    useEffect(()=>{
        axios.get(seacrhByCountry(countryName)).then(({data}) => setCountry(data[0]))
    },[countryName])

    return (
        <div>
            <Button onClick={()=>navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {!!country && <FullDataCard  country={country}/>}
            

        </div>
    );
}

export default Details;