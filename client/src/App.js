import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom'
import Home from './Components/Home';
import UsersIndex from './Components/UsersIndex';
import SignUp from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/users'>
        <UsersIndex />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
