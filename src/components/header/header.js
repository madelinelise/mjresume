import React from 'react';
import { Heading } from '../heading/heading';
import './header.scss';


export const Header = () => (
  <header>
    <div className="header">
      <Heading
        title = "Madeline Jensen"
        headingLevel = "h1"
      />
    </div>
  </header>
);
