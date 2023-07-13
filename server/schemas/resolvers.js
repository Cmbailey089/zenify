// resolvers.js
const { AuthenticationError } = require('apollo-server-express');
const { User, Result } = require('../models/index');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You are not logged in.');
      }
      return await User.findOne({ _id: context.user._id });
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
      const videos = Result.find({ type: 'video' });
      return videos;
    },
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
  },
};

module.exports = resolvers;

