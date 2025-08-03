import type {User, PrismaClient} from '../../generated/prisma';

interface IUser {
    getUsers: () => Promise<User[]>;
    getUserById?: (id: string) => Promise<User | null>;
    createUser?: (data: User) => Promise<User>;
    updateUser?: (id: string, data: Partial<User>) => Promise<User | null>;
    deleteUser?: (id: string) => Promise<User | null>;
}

class UserService implements IUser {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    public async getUsers(): Promise<User[]> {
        try {
            const data = await this.prismaClient.user.findMany();
            console.log('UserService: Fetched users:', data);
            return data;
        } catch (error) {
            console.error('UserService: Error fetching users:', error);
            throw error;
        }
    }
}

export default UserService;
