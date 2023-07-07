const { Schema, model } = require('mongoose');

const videoSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    url: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String,
            trim:true
        }
    ]
});

const Video = model('Video', videoSchema)

module.exports = {Video, videoSchema}