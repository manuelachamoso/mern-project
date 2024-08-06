import { Request, Response } from "express";
import Collection from "../models/Collection";

export async function createCardForCollectionController(req: Request, res: Response) {
  const collectionId = req.params.collectionId;
  const collection = await Collection.findById(collectionId);
  if (!collection) return res.status(400).send("no collection of this id exists");
  const { text } = req.body;
  collection.cards.push(text);
  await collection.save();
  res.json(collection);
}
