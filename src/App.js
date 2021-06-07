import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
import HomeScreen from './screens/homescreens/HomeScreen';
import AboutScreen from './screens/aboutscreens/AboutScreen'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import InfodetailScreen from './screens/infodetailscreens/InfodetailScreen'
import {InfosProvider} from './context/InfosContext'
import './App.scss'

function App() {
  return (
    <ToastProvider>
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
          
        </main>
        <Footer />
      </Router>
      </InfosProvider>
      </ToastProvider>

    );
}

export default App;
