import {PrismaClient} from '../../generated/prisma';
import type {User} from '../../generated/prisma';

const prisma = new PrismaClient();

const getUsers = async (): Promise<User[]> => {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        console.error('PRISMA: Error fetching users:', error);
        throw error;
    }
};

export default {
    getUsers,
};
