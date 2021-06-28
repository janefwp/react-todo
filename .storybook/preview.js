import React from 'react'
import { Provider } from 'react-redux'
import {InfosProvider} from '../src/context/InfosContext'
import store from '../src/redux/store'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './bootstrap.min.css';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <InfosProvider>
        <Router>
          <Story />
        </Router>
        
      </InfosProvider>
      
    </Provider>
  ),
];