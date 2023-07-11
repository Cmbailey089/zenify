const db = require('../config/connection');
const { Video, Result, User } = require('../models');
//const videoSeed = require('./Video.json');
const resultSeed = require('./Result.json')
const userSeed = require('./User.json')

db.once('open', async () => {
    //await Video.deleteMany({});
    //await Video.create(videoSeed);
    console.log('Creating results...')
    await Result.deleteMany({})
    await Result.create(resultSeed)

    console.log("Creating users...")
    await User.deleteMany({})
    await User.create(userSeed)

    console.log('all done!');
    process.exit(0);
  });