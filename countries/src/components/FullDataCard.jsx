import styled from "styled-components";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { filterByCode } from "../Api";

const Wrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px,400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media(min-width:1024px) {
        grid-template-columns: minmax(400px,600px) 1fr;
    }
`;
const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: var(--shadow);
`;

const CardTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media(min-width: 1024px) {
        flex-direction: row;
    }
`;
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const ListItem = styled.li`
    line-height: 1.8;
`;

const Meta =styled.div`
    margin-top: 3rem;

    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width:767px) {
        flex-direction: row;
        align-items: center;
    }
`;
const MetaTitle = styled.h4`
    font-weight: var(--fw-bold);
    margin: 0;
`;
const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;
const Tag = styled.span`
    padding: 0rem 1.5rem;
    background-color: var(--colors-ui-base);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
    
`;

const FullDataCard = ({country}) => {
    const {name,capital,flags,population,region,subregion,borders=[]} = country;
    const navigate= useNavigate();
    const [neighbours,setNeighbours] = useState([]);

    useEffect(()=>{
        (!!borders.length) &&
        axios.get(filterByCode(borders)).then(({data}) =>  setNeighbours(data));
    },[borders]);

    return ( 
        <Wrapper>
            <CardImage src={flags.png}  alt={name.common}/>
            <div>
                <CardTitle>{name.common}</CardTitle>
                <ListGroup >
                    <List>
                        <ListItem >
                            <b>Native Name:</b> {name.common}
                        </ListItem>
                        <ListItem >
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem >
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem >
                            <b>Subregion:</b> {subregion}
                        </ListItem>
                        <ListItem >
                            <b>Capital:</b> {capital[0]}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem >
                            <b>Currency:</b> {population}
                        </ListItem>
                        <ListItem >
                            <b>Region:</b> {region}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta> 
                <MetaTitle>Border Countries</MetaTitle>
                {!!borders.length  ? (<TagGroup>
                    {neighbours.map(border => <Tag  key={border.name.common} onClick={() => navigate(`/country/${border.name.common}`, {replace:true} )}>{border.name.common}</Tag>)}
                </TagGroup>) 
                : (<span>There is no border countries</span>)}
                </Meta>
            </div>
        </Wrapper>

    );
}

export default FullDataCard;