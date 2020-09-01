import React from 'react';
import { Timeline } from './timeline';
import data from './data.json';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/Timeline',
  component: Timeline,
};

const Template = (args) => <Timeline 
  jobs = {data.jobs}
/>;

export const TimelineStory = Template.bind({});

TimelineStory.args = {
  /* the args you need here will depend on your component */
};