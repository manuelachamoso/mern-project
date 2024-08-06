import { API_URL } from "./config";
import { CollectionType } from "./getCollections";

export async function createCard(collectionId: string, text: string): Promise<CollectionType> {
  const response = await fetch(`${API_URL}/collections/${collectionId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
