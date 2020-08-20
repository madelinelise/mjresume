import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

export const Heading = ({title}) => (
  <h1 className="heading">{title}</h1>
);

// TODO: Fix proptypes.
Heading.propTypes = {
  title: PropTypes.string
};
