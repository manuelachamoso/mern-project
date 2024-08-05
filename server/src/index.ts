import express, { Request, Response } from 'express';
import mongoose from'mongoose';
import Deck from './models/Deck';

const PORT = 5000;
const app = express();

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({ 
        title: 'New Deck' 
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
})

mongoose.connect('mongodb+srv://manuelachamoso:dPTIQtkR1rCHbrat@cluster0.ixtkmt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT);
})


