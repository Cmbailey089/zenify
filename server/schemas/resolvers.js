const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context)=>{
            console.log(context)
            if(context.user){
                return User.findOne({_id: context.user._id})
            } 

            throw new AuthenticationError('You are not logged in.')
        }
    },
    Mutation: {
        // logs in existing user
        login: async (parent, {email, password})=>{
            const user = await User.findOne({email})

            if(!user){
                throw new AuthenticationError('no user with this email exists.')
            }

            const correctPw = await user.isCorrectPassword(password)

            if(!correctPw){
                throw new AuthenticationError('The password used is incorrect.')
            }

            const token = signToken(user)

            return {token, user}
        },
        // creates new user
        addUser: async (parent, {username, email, password})=>{
            const user = await User.create({username, email, password})
            const token = signToken(user)

            return {token, user}
        }
    },
};

module.exports = resolvers;
