import React from "react";
import PropTypes from "prop-types";
import "./circle-cta.scss";

export const CircleCTA = (props) => {
  const { stat, description } = props;
  return (
    <div className="circle-cta">
      <div className="circle-cta--stat">{stat}</div>
      <div className="circle-cta--description">{description}</div>
    </div>
  );
};

CircleCTA.propTypes = {
  description: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};
