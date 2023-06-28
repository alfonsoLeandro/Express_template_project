import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import testRoutes from './routes/test.routes';

class Server {
    private readonly app: Application;
    private readonly port: number;
    private readonly apiPaths = {
        test: '/api/test',
    };

    constructor() {
        dotenv.config();

        this.app = express();
        this.port = +(process.env.SERVER_PORT || 2343);

        this.middlewares();

        this.defineRoutes();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.json());
    }

    defineRoutes() {
        this.app.use(this.apiPaths.test, testRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

const server = new Server();

server.listen();

// export default server;