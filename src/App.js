import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser); //Verify userCredentials
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in

        //dispatch an object
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
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
