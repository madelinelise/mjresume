import React from 'react';
import { CircleCTA } from './circle-cta';
import data from './data.json';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/CircleCTA',
  component: CircleCTA,
};

const Template = (args) => <CircleCTA 
  stat={data.stat}
  description={data.description}
/>;

export const CircleCTAStory = Template.bind({});

CircleCTAStory.args = {
  /* the args you need here will depend on your component */
};