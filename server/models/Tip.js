const { Schema, model } = require('mongoose');

const tipSchema = new Schema({
    tip: {
        type: String,
        required:true
    },
   stress: {
        type: String,
        required: true
    }
});

const Tip = model('Tip', tipSchema)

module.exports = {Tip, tipSchema}