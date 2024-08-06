import { API_URL } from "./config";
import { CollectionType } from "./getCollections";

export async function deleteCard(collectionId: string, index: number): Promise<CollectionType>{
  const response = await fetch(`${API_URL}/collections/${collectionId}/cards/${index}`, {
    method: "DELETE",
  });
  return response.json();
}
