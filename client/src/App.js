import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./components/Signup/Signup";
import Videos from "./components/Videos/Videos";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Signin/Signin";
import AboutUs from "./components/AboutUs/AboutUs";
import UpdatePfp from "./components/UpdatePfp/UpdatePfp";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('id_token');
    if (token) {
      setLoggedIn(true);
      setUsername(localStorage.getItem('username'));
    } else {
      setLoggedIn(false);
      setUsername(null);
    }
  }, []);

  const handleSignIn = (token, username) => {
    localStorage.setItem('id_token', token);
    localStorage.setItem('username', username || '');
    setLoggedIn(true);
    setUsername(username || '');
    console.log('User signed in:', { username });
    console.log('Token:', token);
  };

  const handleSignOut = () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('username');
    setLoggedIn(false);
    setUsername(null);
    console.log('User signed out');
  };

  console.log('App - loggedIn:', loggedIn);
  console.log('App - username:', username);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar loggedIn={loggedIn} username={username} handleSignOut={handleSignOut} />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="page-transition"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/videos" component={Videos} />
                    <Route path="/sign-up">
                      <SignUp handleSignIn={handleSignIn} />
                    </Route>
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/sign-in">
                      <SignIn handleSignIn={handleSignIn} />
                    </Route>
                    <Route path="/update-pfp" component={UpdatePfp} /> {/* New route for UpdatePfp */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;




