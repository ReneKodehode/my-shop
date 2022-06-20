import React from "react";
import EmptyStar from "../../img/EmptyStar.svg";
import FilledStar from "../../img/FilledStar.svg";
import HalfFilledStar from "../../img/HalfFilledStar.svg";

export const productRatingDiv = ({ className, rating }) => {
  const full = <img src={FilledStar} alt="Filled Star"></img>;
  const empty = <img src={EmptyStar} alt="Filled Star"></img>;
  const half = <img src={HalfFilledStar} alt="Filled Star"></img>;
  const truncRating = Math.trunc(rating);
  const decimals = Math.round(rating % 1);

  let listOfStars = [];

  for (let i = 0; i < truncRating; i++) {
    listOfStars.push(full);
  }
  if (decimals > 0) {
    listOfStars.push(half);
  }
  for (let i = listOfStars.length; i < 6; i++) {
    listOfStars.push(empty);
  }

  if (rating !== null) {
    return (
      <div className={className}>
        {[...listOfStars]}
        <p>{rating}/6</p>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <p>Error showing rating</p>
      </div>
    );
  }
};
