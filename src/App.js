import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Navigation from "./components/layouts/Navigation";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path ="/skills" component={Skills}/>
          <Route exact path ="/about" component={About}/>
          <Route exact path ="/contact" component={Contact}/>
        </Switch>
    </Router>
  );
}

export default App;