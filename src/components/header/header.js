import React from 'react';
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
