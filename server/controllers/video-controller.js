const { Video } = require('../models');
const { findOneAndUpdate } = require('../models/User');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    async getVideos(req, res){
        try{
            const videos = await Video.find({})
            res.json(videos)
        }catch(err){
            console.log(err)
        }
    },
    // Takes param argument of id
    async getOneVideo(req, res){
        try{
            const video = await Video.findById(req.params.id)
            video?
                res.json(video)
                :
                res.status(404).json("No video found.")
        }catch(err){
            console.log(err)
        }
    }
}