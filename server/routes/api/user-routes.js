const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  /* saveBook,
  deleteBook, */
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/user').get(authMiddleware, getSingleUser);
// router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
