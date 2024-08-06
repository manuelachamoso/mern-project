import { Request, Response } from "express";
import Collection from "../models/Collection";

export async function getCollectionController(req: Request, res: Response) {
  const { collectionId } = req.params;
  const collection = await Collection.findById(collectionId);
  res.json(collection);
}
