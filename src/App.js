import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Common/Navbar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
         <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
