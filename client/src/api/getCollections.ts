import { API_URL } from "./config";

export type CollectionType = {
  title: string;
  _id: string;
  cards: string[];
}

export async function getCollections(): Promise<CollectionType[]> {
  const response = await fetch(`${API_URL}/collections`);
  return response.json();
}