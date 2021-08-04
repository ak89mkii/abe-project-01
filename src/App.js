import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer/Footer.jsx'
import Menu from './components/Menu/Menu.jsx'
import Home from './pages/Index/index.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="screen">
        <Menu />
        <Router>
          {/*All our Routes goes here!*/}
          <Route exact path="/" component={Home} />
        </Router>
        <Footer />
      </div>
      
    )
  }
}

export default App;
