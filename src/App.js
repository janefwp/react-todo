import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from '../src/screens/HomeScreen';
import AboutScreen from '../src/screens/AboutScreen'
import Header from '../src/components/Header'
import InfodetailScreen from '../src/screens/InfodetailScreen'

function App() {
  return (
      <Router >
        <Header />
        <main className="py-3">
          <Container>
          <Route path='/' component={HomeScreen} exact />
            <Route path='/todo' component={HomeScreen} exact />
            <Route path='/about' component={AboutScreen} exact />
            <Route path='/todo/:id' component={InfodetailScreen} exact />
          </Container>
          
        </main>
        {/* <Footer /> */}
      </Router>
    );
}

export default App;
