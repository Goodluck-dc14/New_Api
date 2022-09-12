import mongoose from 'mongoose';

const url: string = 'mongodb://localhost:27017/keza';
// process.env.LOCAL_MONGO_URI;
const db = () => {
    mongoose.connect(url).then(() => {
        console.log('Connected');
    });
};

export default db;
