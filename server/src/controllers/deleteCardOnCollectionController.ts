import { Request, Response } from "express";
import Collection from "../models/Collection";

export async function deleteCardOnCollectionController(req: Request, res: Response) {
  const collectionId = req.params.collectionId;
  const index = req.params.index;
  const collection = await Collection.findById(collectionId);
  if (!collection) return res.status(400).send("no collection of this id exists");
  collection.cards.splice(parseInt(index), 1);
  await collection.save();
  res.json(collection);
}
