const { Result } = require('../models');

module.exports = {
    async getAllResults(req, res){
        try{
            return await Result.find()
        }catch(err){
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
            return await Result.find()
        }catch(err){
            console.log(err)
        }
    },
    async createResult(req, res){
        try{
            return await Result.create({...req.body})
        }catch(err){
            console.log(err)
        }
    }
}