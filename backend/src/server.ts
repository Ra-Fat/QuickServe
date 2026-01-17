import express from 'express';
import { sequelize } from './db/sequelize.js';

const app = express();

async function TestServer(){
    try{
        await sequelize.authenticate();
        console.log('Database Connected');
        console.log('DB URL:', process.env.DATABASE_URL);

        await sequelize.sync();
        app.listen(3000, () => console.log('Server running on port 3000'));
    }catch(err){
        console.error('Failed to connect to DB:', err);
    process.exit(1);
    }
}

TestServer();