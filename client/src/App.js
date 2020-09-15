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
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <AuthRoute exact path='/'>
          <LandingPage />
        </AuthRoute>
        <ProtectedRoute path='/home'>
          <Home />
        </ProtectedRoute>
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
