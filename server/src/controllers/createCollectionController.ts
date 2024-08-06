import { Request, Response } from "express";
import Collection from "../models/Collection";

export async function createCollectionController(req: Request, res: Response) {
  const newCollection = new Collection({
    title: req.body.title,
  });
  const createdCollection = await newCollection.save();
  res.json(createdCollection);
}
