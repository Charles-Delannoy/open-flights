import React from 'react';

const Header = ( { attributes, reviews }) => {
  const {name, image_url, avg_score} = attributes
  const total = reviews.length
  return (
    <div className='wrapper'>
      <h1> <img src={image_url} alt={name}/> {name} </h1>
      <div>
        <div className='total-reviews'>{total} User Reviews</div>
        <div className='star-rating'></div>
        <div className='total-out-of'>{avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
