// src/ExperienceFragment.js
import React from 'react';
import PropTypes from 'prop-types';

const ExperienceFragment = ({ headline, subtext, price, buttonText, imageSrc }) => {
  return (
    <div className="experience-fragment">
      <img src={imageSrc} alt={headline} className="experience-image" />
      <h2>{headline}</h2>
      <p>{subtext}</p>
      <p className="price">${price}</p>
      <button>{buttonText}</button>
    </div>
  );
};

ExperienceFragment.propTypes = {
  headline: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ExperienceFragment;
