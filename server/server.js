const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas/index')
const db = require('./config/connection');
// const routes = require('./routes');
const apiRoutes = require('./routes/index')
/*adding imports for stripe*/
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
// const bodyParser = require('body-parser')
const cors = require('cors')

const {authMiddleware} = require('./utils/auth')
const app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin: "http://localhost:3000"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})



// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/api', apiRoutes)

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

