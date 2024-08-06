import { API_URL } from "./config";
import { CollectionType } from "./getCollections";

export async function getCollection(collectionId: string): Promise<CollectionType> {
  const response = await fetch(`${API_URL}/collections/${collectionId}`);
  return response.json();
}
