const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  updateUserProfilePicture,
  deleteUserProfilePicture,
  /* saveBook,
  deleteBook, */
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/user').get(authMiddleware, getSingleUser);
router.route('/user/profile-picture').put(authMiddleware, updateUserProfilePicture);
router.route('/user/profile-picture').delete(authMiddleware, deleteUserProfilePicture);
// router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;

