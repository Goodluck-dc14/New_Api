import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();

const url: string = 'mongodb://localhost:27017/FoodAvizDB';

mongoose.connect(url).then(() => {
    console.log('Database connected');
});

const app = express();
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log('Server is now running safe');
});
