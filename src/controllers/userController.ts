import {Request, Response} from 'express';
import UserService from '../services/userService';

interface IUserController {
    getUsers: (req: Request, res: Response) => Promise<void>;
    getUserById: (req: Request, res: Response) => Promise<void>;
    createUser: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
}

class UserController implements IUserController {
    private userService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public getUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getUsers();

            res.status(200).json(users);
        } catch (error) {
            console.error('UserController: Error fetching users:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;
            const user = await this.userService.getUserById(Number(id));

            if (!user) {
                res.status(404).json({error: 'User not found'});
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(`UserController: Error fetching user:`, error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const newUser = await this.userService.createUser(req.body);

            res.status(201).json(newUser);
        } catch (error) {
            console.error('UserController: Error creating user:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;
            const updatedUser = await this.userService.updateUser(Number(id), req.body);

            if (!updatedUser) {
                res.status(404).json({error: 'User not found'});
                return;
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            console.error(`UserController: Error updating user:`, error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;
            const deletedUser = await this.userService.deleteUser(Number(id));

            if (!deletedUser) {
                res.status(404).json({error: 'User not found'});
                return;
            }
            res.status(200).json(deletedUser);
        } catch (error) {
            console.error(`UserController: Error deleting user:`, error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };
}

export default UserController;
