import React from "react";
import PropTypes from "prop-types";
import "./body-text.scss";

export const BodyText = (props) => {
  const { description } = props;
  return <p className="body-text">{description}</p>;
};

BodyText.propTypes = {
  description: PropTypes.string.isRequired,
};
