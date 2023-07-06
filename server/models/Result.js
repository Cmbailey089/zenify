const { Schema, model } = require('mongoose');

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
    type: Schema.Types.Mixed,
    required: true,
  },
  tags: {
    type: [String],
  },
});

const Result = model('Result', resultSchema);

module.exports = Result;