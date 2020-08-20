import React from 'react';
import { CTAList } from './cta-list';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/CTAList',
  component: CTAList,
};

const Template = (args) => <CTAList />;

export const CTAListStory = Template.bind({});

CTAList.args = {
  /* the args you need here will depend on your component */
};