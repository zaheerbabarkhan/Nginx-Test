import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on port', process.env.PORT);
}
);