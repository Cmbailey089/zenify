const { Schema, model } = require('mongoose');

const videoSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    url: {
        type:String,
        required: true
    }
});

const Video = model('Video', videoSchema)

module.exports = Video