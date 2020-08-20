import React from 'react';
import { CircleCTA } from './circle-cta';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/CircleCTA',
  component: CircleCTA,
};

const Template = (args) => <CircleCTA />;

export const CircleCTAStory = Template.bind({});

CircleCTAStory.args = {
  /* the args you need here will depend on your component */
};