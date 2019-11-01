import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Listing from './components/Listing/Listing';
import NextPage from './components/NextPage/NextPage';
import DynamicComponent from './components/DynamicComponent/dynamicComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Crypto Currency</h2>
        </div>
        <Switch>

          <Route path="/" exact component={Listing} />
          {/* <Route path="/NextPage/:coinName" component={DynamicComponent} /> */}
          <Route path="/NextPage" component={NextPage} />

        </Switch>
      </div>

    );
  }
}

export default App;
