import React from 'react';

import { Page } from './page';

export default {
  title: 'Components/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const PageStory = Template.bind({});
PageStory.args = {
};
