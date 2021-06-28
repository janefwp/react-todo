import React from 'react';
import Header from './Header';
// import './header.scss'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default {
  component: Header,
  title: 'Header',
};
const Template = args => <Header {...args} />;

export const Default = Template.bind({});

