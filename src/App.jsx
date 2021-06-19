import React, { useState } from 'react';
import './App.css';
import Dashboard from './screens/dashboard';
import Login from './screens/login';
import Preferences from './screens/preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <div className="container">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
