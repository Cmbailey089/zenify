const db = require('../config/connection');
const { Video } = require('../models');
const videoSeed = require('./Video.json');

db.once('open', async () => {
    await Video.deleteMany({});
    await Video.create(videoSeed);
  
    console.log('all done!');
    process.exit(0);
  });