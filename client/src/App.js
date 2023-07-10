import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./components/Signup/Signup";
import Videos from "./components/Videos/Videos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/videos" component={Videos} />
      <Route path="/sign-up" component={SignUp} />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
