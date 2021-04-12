import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { auth } from "./firebase/firebase";

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
      } else {
        //logged out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

//Router
//Router is going to look at the page route and determine what component gets rendered at the URL

//User Persistence
//useEffect hook uses firebase method to create a cookie in local storage?

//
