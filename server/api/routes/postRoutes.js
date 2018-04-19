const router = require('express').Router();
const authenticate = require('../../middleware/authenticateMiddleware').authenticate;
const postController = require('../controllers/postController');

router.param('id', postController.param);
router.route('/')
    .get(authenticate, postController.getAll)
    .post(authenticate, postController.uploadPost);

router.route('/me')
    .get(authenticate, postController.getMyPosts);

router.route('/filter')
    .get(authenticate, postController.getCategory);

router.route('/:id')
    .get(authenticate, postController.getOnePost)
    .put(authenticate, postController.updatePost)
    .delete(authenticate, postController.deletePost);


module.exports = router;

