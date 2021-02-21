import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Alert from './components/Alert';
import AlertState from './components/context/alert/alertState';
import FirebaseState from './components/context/firebase/firebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container mt-4">
            <Alert/>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
