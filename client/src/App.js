import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./components/Signup/Signup";
import Videos from "./components/Videos/Videos";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
    <div>
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
                    <Route path="/signin" component={Signin} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      <Footer />
    </div>
    </Router>
</ApolloProvider>
  );
}

export default App;
