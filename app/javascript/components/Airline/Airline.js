import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const findAirline = async () => {
      const slug = props.match.params.slug;
      const { data } = await axios.get(`/api/v1/airlines/${slug}`);
      setAirline(data);
      setLoaded(true);
    };
    findAirline();
  }, []);

  return (
    <div className='wrapper'>
      <div className='column'>
        {loaded &&
        <Header
          attributes={airline.data.attributes}
          reviews={airline.included}
        />
      }
        <div className='reviews'></div>
      </div>
      <div className='column'>
        <div className="review-form">[Reviews Form Goes Here]</div>
      </div>
    </div>
  );
};

export default Airline;
