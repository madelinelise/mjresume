import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../heading/heading';
import './header.scss';


export const Header = () => (
  <header>
    <div className="header">
      <Heading
        title = "Madeline Schimenti"
        headingLevel = "h1"
      />
    </div>
  </header>
);
