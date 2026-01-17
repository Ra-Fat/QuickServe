import express from 'express';
import './model/index.js';
import app from './app.js';
import { sequelize } from './db/sequelize.js';

const PORT = process.env.PORT || 3000;

async function TestServer(){
    try{
        await sequelize.authenticate();
        console.log('Database Connected');

        await sequelize.sync({ force: true });
        console.log('All tables synced');

        app.listen(3000, () => console.log('Server running on port 3000'));
    }catch(err){
        console.error('Failed to connect to DB:', err);
        process.exit(1);
    }
}

TestServer();