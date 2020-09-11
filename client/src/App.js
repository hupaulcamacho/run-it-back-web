import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom'
import Home from './Components/Home';
import UsersIndex from './Components/UsersIndex';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import AuthProvider from './providers/AuthContext';
import { AuthRoute, ProtectedRoute } from './util/routesUtil';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <ProtectedRoute path='/users'>
          <UsersIndex />
        </ProtectedRoute>
        <AuthRoute path='/signup'>
          <SignUp />
        </AuthRoute>
        <AuthRoute path='/login'>
          <Login />
        </AuthRoute>
      </AuthProvider>
    </div>
  );
}

export default App;
