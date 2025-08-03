import {Router} from 'express';
import UserService from '../services/userService';
import UserController from '../controllers/userController';
import {PrismaClient} from '../../generated/prisma';

const prisma = new PrismaClient();
const userService = new UserService(prisma);
const userController = new UserController(userService);

const router = Router();

router.get('/users', userController.getUsers);

export default router;
