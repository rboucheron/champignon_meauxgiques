import { PrismaClient, Prisma } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

const prisma = new PrismaClient();
const app = express();

export const readQCM = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const qcm = await prisma.question.findMany({
            include: {
                responses: true,
            },
        });
        res.json(qcm);
    } catch (error) {
        next(error);
    }
}