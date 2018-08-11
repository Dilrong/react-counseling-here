import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { main } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route exact path='/' component={main}/>
      </div>
    );
  }
}

export default App;
