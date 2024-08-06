import { Request, Response } from "express";
import Collection from "../models/Collection";

export async function deleteCollectionController(req: Request, res: Response) {
  const collectionId = req.params.collectionId;
  const collection = await Collection.findByIdAndDelete(collectionId);
  res.json(collection);
}
