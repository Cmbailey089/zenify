const router = require("express").Router()
const {
    createCheckoutSession
} = require('../../controllers/stripe-controller')

router.route('/').post(createCheckoutSession)

module.exports = router