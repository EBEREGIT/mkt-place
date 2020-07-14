// external imports
import React from 'react';
import { Switch, Route } from "react-router-dom";

// internal Imports
import './App.scss';
import NavComponent from './components/NavComponent';
import LandingPage from './pages/LandingPage';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <NavComponent />
      
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/account" component={Account} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
