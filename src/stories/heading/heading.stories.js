import React from 'react';
import { Heading } from './heading';
import data from './data.json';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/Heading',
  component: Heading,
};

const Template = (args) => <Heading 
  title = {data.title}
/>;

export const HeadingStory = Template.bind({});
