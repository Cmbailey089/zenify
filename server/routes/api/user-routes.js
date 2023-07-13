const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/user').get(authMiddleware, getSingleUser);
router.route('/user/:id').put(authMiddleware, updateUser);
router.route('/user/:id').delete(authMiddleware, deleteUser);

module.exports = router;

