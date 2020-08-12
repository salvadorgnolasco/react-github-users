import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';

import {Switch, Route} from 'react-router-dom';

import React from 'react';


function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Home></Home>
        </Route>
        <Route component={Error}/>
      </Switch>
    </main>
  );
}

export default App;
