const { AuthenticationError } = require('apollo-server-express');
const { User, Result } = require('../models/index');
const { signToken } = require('../utils/auth');

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
    deleteResult: async (parent, {_id}) => {
      const result = await Result.findByIdAndDelete(_id)
      return result
    },
    deleteUser: async (parent, {_id}) => {
      const user = await User.findByIdAndDelete(_id)
      return user
    },
    addNote: async (parent, { UserId, noteText }) => {
      return User.findOneAndUpdate(
        { _id: UserId },
        {
          $addToSet: { note: { noteText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
  },
};

module.exports = resolvers;
