import mongoose from 'mongoose';

export interface User {
    name: string;
    otp: number;
    email: string;
    password: string;
    face: string;
    cardID: string;
    bankName: string;
    bankNumber: number;
}

export interface newUser extends User, mongoose.Document {}

const userModel: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        otp: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        face: {
            type: String,
        },
        cardID: {
            type: String,
        },
        bankName: {
            type: String,
        },
        bankNumber: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model<newUser>('users', userModel);
