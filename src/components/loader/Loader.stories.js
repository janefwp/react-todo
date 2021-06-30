import React from 'react';

import Loader from './Loader';

export default {
  component: Loader,
  title: 'Loader',
};
const Template = args => <Loader {...args} />;

export const Loading = Template.bind({});
