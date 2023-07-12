const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const resultRoutes = require('./api/result-routes');
const stripeRoutes = require('./api/stripe-routes')

router.use('/users', userRoutes);
router.use('/results', resultRoutes);
router.use('/payment', stripeRoutes);

module.exports = router;
