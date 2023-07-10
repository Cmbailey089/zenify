const { Result } = require('../models');

module.exports = {
    async getAllResults(req, res){
        try{
            const results = await Result.find()
            res.status(200).json(results)
            return results
        }catch(err){
            res.status(500).json("Error in data search.")
            console.log(err)
        }
    },
    async searchResults(req, res){
        try{
            let criteria = {
                title: title
            }
            if(type){
                criteria.type = type
            }
            if(tags){
                criteria.tags = tags
            }
            const results = await Result.find({...criteria})
            return results
        }catch(err){
            res.status(500).json("Error in data search.")
            console.log(err)
        }
    },
    async createResult(req, res){
        try{
            return await Result.create({...req.body})
        }catch(err){
            res.status(500).json("Error in data search.")
            console.log(err)
        }
    },
     async getVideos(parent){
        try{
            const videos = Result.find({type:"video"})
            return videos
        }catch(err){
            res.status(500).json("Error in data search.")
            console.log(err)
        }
    }
}