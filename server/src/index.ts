import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
})

app.get('/another', (req: Request, res: Response) => {
    res.send('Hello, from another page!');
})

app.listen(5000);