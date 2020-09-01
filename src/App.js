import React from 'react';
import logo from './logo.svg';
import './style.scss';
import { Page } from './components/page/page';

function App(args) {
  return (
    <Page {...args} />
  );
}

export default App;
