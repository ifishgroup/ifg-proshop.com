import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Shop from './components/shop/Shop';
import Signup from './components/signup/Signup';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

const NoMatch = ({ location }) => (
  <div className='ui inverted red raised very padded text container segment'>
    <strong>Error!</strong> No route found matching:
    <div className='ui inverted black segment'>
      <code>{location.pathname}</code>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Signup} />
            <Route path='/shop' component={Shop} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </section>
    );
  }
}

export default App;
