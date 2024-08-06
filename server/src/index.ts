import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from'mongoose';
import Collection from './models/Collection';
import cors from 'cors';
import { createCardForCollectionController } from './controllers/createCardForCollectionController';
import { createCollectionController } from './controllers/createCollectionController';
import { deleteCardOnCollectionController } from './controllers/deleteCardOnCollectionController';
import { deleteCollectionController } from './controllers/deleteCollectionController';
import { getCollectionController } from './controllers/getCollectionController';
import { getCollectionsController } from './controllers/getCollectionsController';
config();

const PORT = 5000;
const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json())

app.get("/collections", getCollectionsController);
app.post("/collections", createCollectionController);
app.delete("/collections/:collectionId", deleteCollectionController);
app.get("/collections/:collectionId", getCollectionController);
app.post("/collections/:collectionId/cards", createCardForCollectionController);
app.delete("/collections/:collectionId/cards/:index", deleteCardOnCollectionController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT);
})



