const { Schema, model } = require('mongoose');
const {videoSchema} = require('./Video')

const resultSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  payload: {
    type: videoSchema,
    required: true,
  },
  tags: {
    type: [String],
  },
});

const Result = model('Result', resultSchema);

module.exports = Result;