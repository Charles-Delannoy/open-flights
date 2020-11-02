import React from 'react';
import styled from 'styled-components';

const StarWrapper = styled.span`
  position: relative;
  display: inline-block;
  color: #ffbe02;
`;

const Rating = ({score}) => {
  let scoreCount = score;
  const starsClass = [];
  for (let i=0; i<5; i++) {
    if (scoreCount >= 1) {
      starsClass.push("fas fa-star");
    } else if (scoreCount > 0) {
      starsClass.push("fas fa-star-half-alt");
    } else {
      starsClass.push("far fa-star");
    }
    scoreCount -= 1;
  }

  return (
    <StarWrapper>
      <i className={starsClass[0]}></i>
      <i className={starsClass[1]}></i>
      <i className={starsClass[2]}></i>
      <i className={starsClass[3]}></i>
      <i className={starsClass[4]}></i>
    </StarWrapper>
  );
};

export default Rating;
