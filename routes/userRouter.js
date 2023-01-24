const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAll);
userRouter.get('/:userId', UserController.getOne);
userRouter.put('/:userId', UserController.updateOne);
userRouter.delete('/:userId', UserController.deleteOne);

module.exports = userRouter;