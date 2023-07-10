const router = require('express').Router();
const {
    getAllResults,
    searchResults,
    createResult
  } = require('../../controllers/result-controller');

  router.route('/').get(getAllResults)
  router.route('/').get(searchResults)
  router.route('/').post(createResult)

  module.exports = router