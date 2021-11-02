import { Route, Link, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router';

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route>
            <Login exact path="/login"/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/logout">
            <Logout/>
          </Route>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
