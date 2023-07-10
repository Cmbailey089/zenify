const router = require('express').Router();
const {
    getAllResults,
    searchResults,
    createResult,
    getVideos
  } = require('../../controllers/result-controller');

  router.route('/').get(getAllResults)
  router.route('/search').get(searchResults)
  router.route('/').post(createResult)
  router.route('/videos').get(getVideos)

  module.exports = router