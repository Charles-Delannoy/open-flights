import React from 'react';
import Review from './Review';
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -8px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-right: 10px;
`;

const GlobalScore = styled.div`
  font-size: 18px;
  padding: 10px 0;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const BackToList =  styled.a`
  background: #0154a6;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  height: 20px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Header = ( { attributes, reviews }) => {
  const {name, image_url, avg_score} = attributes
  const total = reviews.length

  return (
    <Wrapper>
      <BackToList href="/">Home</BackToList>
      <h1> <img src={image_url} alt={name}/> {name} </h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className='star-rating'></div>
        <GlobalScore>
          <TotalOutOf>{avg_score} out of 5:</TotalOutOf>
          <Rating score={avg_score} />
        </GlobalScore>
      </div>
    </Wrapper>
  );
};

export default Header;
