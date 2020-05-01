import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import New from './New';
import History from './History';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
        </div>
          
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/new" component={New}/>
          <Route exact path="/history" component={History}/>          
          
        </Switch>
      </div>
    )
  }
}

export default App;
