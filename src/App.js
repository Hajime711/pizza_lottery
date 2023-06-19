import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Lottery from './components/pages/Lottery';
import SignIn from './components/pages/SignIn';

function App() {
  const [username, setUsername] = useState('');
  return (
    <>
      <Router>
        <Navbar username={username} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/lottery' component={Lottery} />
          <Route path="/sign-in">
          <SignIn setUsername={setUsername} />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
