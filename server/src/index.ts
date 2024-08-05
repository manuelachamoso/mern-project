import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from'mongoose';
import Collection from './models/Collection';
import cors from 'cors';
config();

const PORT = 5000;
const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json())

app.get('/collections', async (req: Request, res: Response) => {
    const collections = await Collection.find({});
    res.json(collections);
})

app.post('/collections', async (req: Request, res: Response) => {
    console.log(req.body);
    const newCollection = new Collection({ 
        title: req.body.title, 
    });
    const createdCollection = await newCollection.save();
    res.json(createdCollection);
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT);
})



