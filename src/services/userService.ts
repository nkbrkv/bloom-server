import type {User, PrismaClient} from '../../generated/prisma';

interface IUser {
    getUsers: () => Promise<User[]>;
    getUserById: (id: number) => Promise<User | null>;
    createUser: (data: User) => Promise<User>;
    updateUser: (id: number, data: Partial<User>) => Promise<User | null>;
    deleteUser: (id: number) => Promise<User | null>;
}

class UserService implements IUser {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    public async getUsers(): Promise<User[]> {
        try {
            const data = await this.prismaClient.user.findMany();

            return data;
        } catch (error) {
            console.error('UserService: Error fetching users:', error);
            throw error;
        }
    }

    public async getUserById(id: number): Promise<User | null> {
        try {
            const user = await this.prismaClient.user.findUnique({
                where: {id},
            });

            return user;
        } catch (error) {
            console.error(`UserService: Error fetching user:`, error);
            throw error;
        }
    }

    public async createUser(data: User): Promise<User> {
        try {
            const newUser = await this.prismaClient.user.create({data});

            return newUser;
        } catch (error) {
            console.error('UserService: Error creating user:', error);
            throw error;
        }
    }

    public async updateUser(id: number, data: Partial<User>): Promise<User | null> {
        try {
            const updatedUser = await this.prismaClient.user.update({
                where: {id},
                data,
            });

            return updatedUser;
        } catch (error) {
            console.error(`UserService: Error updating user:`, error);
            throw error;
        }
    }

    public async deleteUser(id: number): Promise<User | null> {
        try {
            const deletedUser = await this.prismaClient.user.delete({
                where: {id},
            });

            return deletedUser;
        } catch (error) {
            console.error(`UserService: Error deleting user:`, error);
            throw error;
        }
    }
}

export default UserService;
