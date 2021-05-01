// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Logout from "./Logout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        //User is/was logged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/logout">
            <Logout />
          </Route> */}
          <Route path="/logout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
