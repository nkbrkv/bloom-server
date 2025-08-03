import {Router} from 'express';
import UserService from '../services/userService';
import UserController from '../controllers/userController';
import {PrismaClient} from '../../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

const userService = new UserService(prisma);
const userController = new UserController(userService);

router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;
