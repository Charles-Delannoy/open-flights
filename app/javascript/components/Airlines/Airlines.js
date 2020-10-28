import React, { useState, useEffect } from 'react';
import Airline from './Airline'
import axios from 'axios';
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-rigth: auto;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    const findAirlines = async () => {
      const { data } = await axios.get('/api/v1/airlines.json');
      setAirlines(data.data);
      console.log(airlines);
    }
    findAirlines();
  }, [airlines.length]);

  const grid = airlines.map(airline => {
    return (
      <Airline
        key={airline.attributes.name}
        attributes={airline.attributes}
      />
    );
  });

  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, unbiased airline reviews.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  );
};

export default Airlines;
