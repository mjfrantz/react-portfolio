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
import AddPortfolio from "./components/AddPortfolio";
import { createGlobalStyle } from "styled-components";
import Modal from "./components/Modal";


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    
  }

  .modal {
    background: rgba(0,0,0, .7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      
  div {
        background-color: white;
        border: 1px solid grey;
        width: 50%;
        padding: 10px;
        border-radius: 20px;
      }
    }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation/>
      {/* <Modal>
        {/* <div>
          <h1>Modal</h1>
          <p>Ivan loves Jeff's Penis</p>
        </div> }
      </Modal> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/portfolio/add' component={AddPortfolio} />
      </Switch>
    </Router>
  );
}

export default App;