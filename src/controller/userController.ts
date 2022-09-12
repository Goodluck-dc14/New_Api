import { Request, Response } from 'express';
import userModel from '../model/userModel';
import crypto from 'crypto';
import { verifiedUser } from '../utils/email';

type myData = number | string;

const getUsers = async (req: Request, res: Response) => {
    try {
        const users: myData[] = await userModel.find();
        res.status(200).json({
            message: 'users found',
            data: users,
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const createUsers = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        const users = await userModel.create({
            email,
        });

        const code = crypto.randomBytes(2).toString('hex');

        verifiedUser(email, users, code)
            .then((result: any) => {
                console.log('sent: ', result);
            })
            .catch((error: any) => {
                console.log(error);
            });

        res.status(200).json({
            message: 'users found',
            data: users,
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
