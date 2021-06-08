import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from './screens/homescreens/HomeScreen';
import AboutScreen from './screens/aboutscreens/AboutScreen'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import InfodetailScreen from './screens/infodetailscreens/InfodetailScreen'
import {InfosProvider} from './context/InfosContext'
import { Toaster } from 'react-hot-toast';
import './App.scss'

function App() {
  return (
    
    <InfosProvider >
      <Router >
        <Header />
        <main className="py-3">
          <Container fluid>
          <Route path='/' component={HomeScreen} exact />
            <Route path='/todo' component={HomeScreen} exact />
            <Route path='/about' component={AboutScreen} exact />
            <Route path='/todo/:id' component={InfodetailScreen} exact />
          </Container>
          <Toaster />
        </main>
        <Footer />
      </Router>
      </InfosProvider>
     

    );
}

export default App;
