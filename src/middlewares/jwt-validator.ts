import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { ErrorCodes } from '../utils/error-codes';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({
            error: ErrorCodes.NO_TOKEN_PROVIDED
        });
        return;
    }

    try {
        const res = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload;

        // IMPLEMENT USER VALIDATION

        const id: string = res['id'];

        if(!id) {
            res.status(401).json({
                error: ErrorCodes.INVALID_TOKEN
            });
            return;
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            error: ErrorCodes.INVALID_TOKEN
        });
    }
};

export default validateJWT;