const {Router} = require('express');
const PostController = require('../controllers/post.controller');
const postRouter = Router();

postRouter.post('/:userId', PostController.createPost);
postRouter.get('/', PostController.getAllPost);
postRouter.get('/:postId', PostController.getOnePost);
postRouter.put('/:postId', PostController.updateOnePost);
postRouter.delete('/:postId', PostController.deleteOnePost);

module.exports = postRouter;