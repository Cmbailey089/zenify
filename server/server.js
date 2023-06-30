const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas/index')
const db = require('./config/connection');
// const routes = require('./routes');

const {authMiddleware} = require('./utils/auth')
const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //context: authMiddleware
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const startServer = async (typeDefs, resolvers)=>{
  await server.start();
  server.applyMiddleware({app})

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
}

startServer(typeDefs, resolvers)

