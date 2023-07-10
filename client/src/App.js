import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./components/Signup/Signup";
import Videos from "./components/Videos/Videos";
import Footer from "./components/Footer/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route
          render={({ location }) => {
            const locationKey = location.pathname; // Use the pathname as the key
            return (
              <TransitionGroup>
                <CSSTransition
                  key={locationKey}
                  timeout={500}
                  classNames="page-transition"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/videos" component={Videos} />
                    <Route path="/sign-up" component={SignUp} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
