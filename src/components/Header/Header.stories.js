import React from 'react';
import Header from './Header';
import './header.scss'

export default {
  component: Header,
  title: 'Header',
};
const Template = args => <Header {...args} />;

export const Default = Template.bind({});

