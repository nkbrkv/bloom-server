/* eslint-disable @typescript-eslint/no-unused-vars */
import {FastifyRequest, FastifyReply} from 'fastify';

interface IApiController {
    post(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    get(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    put(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    delete(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

class ApiController implements IApiController {
    async post(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Handle the POST request
    }

    async get(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Handle the GET request
    }

    async put(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Handle the PUT request
    }

    async delete(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Handle the DELETE request
    }
}

export default ApiController;
