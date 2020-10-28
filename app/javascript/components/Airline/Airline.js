import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    const findAirline = async () => {
      const slug = props.match.params.slug;
      const { data } = await axios.get(`/api/v1/airlines/${slug}`);
      setAirline(data);
    };

    findAirline();
  }, []);

  return (
    <div>
      This is the Airlines#show view for out app.
    </div>
  );
};

export default Airline;
