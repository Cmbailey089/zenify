const { AuthenticationError } = require('apollo-server-express');
const { User, Result, Product } = require('../models/index');
const { signToken } = require('../utils/auth');
require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You are not logged in.');
    },
    getResults: async (parent) => {
      const results = await Result.find();
      return results;
    },
    searchResults: async (parent, { title, type, tags }) => {
      let criteria = {
        title: title,
      };
      if (type) {
        criteria.type = type;
      }
      if (tags) {
        criteria.tags = tags;
      }
      const results = await Result.find(criteria);
      return results;
    },
    getVideos: async (parent) => {
      const videos = await Result.find({ type: 'video' });
      return videos;
    },
    getProducts: async (parent) => {
      try{
        const products = await Product.find()
        return products
      }catch(err){
        console.log(err)
      }
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email exists.');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('The password used is incorrect.');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    addResult: async (parent, { title, type, payload, tags }) => {
      const result = await Result.create({ title, type, payload, tags });
      return result;
    },
    deleteResult: async (parent, {_id}) => {
      const result = await Result.findByIdAndDelete(_id)
      return result
    },
    deleteUser: async (parent, {_id}) => {
      const user = await User.findByIdAndDelete(_id)
      return user
    },
    addToCart: async (parent, args, context) => {
      console.log(args)
      console.log("User id: "+context.user._id)
      try{
        console.log(context)
        const user = await User.findByIdAndUpdate(context.user._id, {$push:{cart:{...args}}})
        return user
      }catch(err){
        console.log(err)
      }
    },
    addProduct: async (parent, {name, priceInCents}) => {
      const product = await Product.create({name, priceInCents})
      return product
    },
    getCheckout: async (parent, {cart}) => {
      try{
        /*
        req.body structure:

        {
            cart{
                product{
                    name: String,
                    priceInCents: Int
                }
                count: Int 
            }
        }
        */
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode: 'payment',
            line_items: cart.map(item=>{
                return{
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name: item.product.name
                        },
                        unit_amount: item.product.priceInCents
                    },
                    quantity: item.count
                }
            }),
            success_url: `${process.env.SERVER_URL}`,
            cancel_url: `${process.env.SERVER_URL}`
        })//.then(res=>res.status(201).json(session))
        return (session.url)
    }catch(err){
        console.log(err)
    }
    }
  },
};

module.exports = resolvers;
