import React, { useState, useEffect, Fragment } from 'react';
import Header from './Header';
import ReviewForm from './ReviewForm';
import Review from './Review';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000
  }
`;

const Main = styled.div`
  padding-left: 50px;
`;

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({title: '', description: '', score: 0});
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

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    const airline_id = airline.data.id;
    const postReview = async () => {
      const { data } = await axios.post('/api/v1/reviews', {review, airline_id});
      const included = [...airline.included, data.data];

      setAirline({...airline, included});

      setReview({title: '', description: '', score: 0});
    };
    postReview();
  };

  const setRating = (score, e) => {
    e.preventDefault();

    setReview({...review, score});
  };

  let reviews
  if (loaded) {
    reviews = airline.included.map((review, index) => {
      return (
        <Review
          key={index}
          attributes={review.attributes}
        />
      );
    });
  }

  return (
    <Wrapper>
      {loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  );
};

export default Airline
