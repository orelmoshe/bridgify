import express, { Request, Response } from 'express';
import path from 'path';
import Controller from '../controllers/controller';

export const router = express.Router({ strict: true });

const controller = new Controller();

router.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

router.post('/search', controller.getPlaces);
