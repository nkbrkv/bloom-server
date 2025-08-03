import dotenv from 'dotenv';
import Fastify from 'fastify';
import prismaClient from './services/prismaClient';
dotenv.config();

const fastify = Fastify({logger: true});

fastify.get('/', function (request, reply) {
    reply.send({hello: 'world'});
});

async function startApp(): Promise<void> {
    try {
        const users = await prismaClient.getUsers(); // Example usage of the Prisma client

        console.log('Fetched users:', users);
        // fastify.listen({port: 3000});

        console.log('Server is starting... ');
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
}

startApp();
