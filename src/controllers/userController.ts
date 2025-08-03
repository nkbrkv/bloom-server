import {Request, Response} from 'express';
import UserService from '../services/userService';

interface IUserController {
    getUsers: (req: Request, res: Response) => Promise<Response>;
    getUserById?: (req: Request, res: Response) => Promise<void>;
    createUser?: (req: Request, res: Response) => Promise<void>;
    updateUser?: (req: Request, res: Response) => Promise<void>;
    deleteUser?: (req: Request, res: Response) => Promise<void>;
}

class UserController implements IUserController {
    private userService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public getUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const users = await this.userService.getUsers();

            return res.status(200).json(users);
        } catch (error) {
            console.error('UserController: Error fetching users:', error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    };
}

export default UserController;
