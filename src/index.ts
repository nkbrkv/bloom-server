import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './router/router';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

async function startApp(): Promise<void> {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('Server is starting... ');
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
}

startApp();
