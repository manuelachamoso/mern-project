import { Request, Response } from "express";
import Collection from "../models/Collection";

export async function getCollectionsController(req: Request, res: Response) {
  const collections = await Collection.find();
  res.json(collections);
}
