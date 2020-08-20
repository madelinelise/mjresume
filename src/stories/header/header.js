import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../heading/heading';
import { Button } from '../button/button'
import './header.scss';


export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <Heading/>
    </div>
  </header>
);

// TODO: Fix proptypes.
Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
