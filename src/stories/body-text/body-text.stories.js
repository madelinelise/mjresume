import React from 'react';
import { BodyText } from './body-text';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/BodyText',
  component: BodyText,
};

const Template = (args) => <BodyText />;

export const BodyTextStory = Template.bind({});

BodyTextStory.args = {
  /* the args you need here will depend on your component */
};