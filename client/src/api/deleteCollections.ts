import { API_URL } from "./config";

export async function deleteCollections(collectionId: string) {
    await fetch(`${API_URL}/collections/${collectionId}`, {
    method: 'DELETE',
  });
  }