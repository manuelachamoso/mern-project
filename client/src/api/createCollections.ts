import { API_URL } from "./config";

export async function createCollection(title: string) {
    const response = await fetch(`${API_URL}collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify({ 
        title
      }),
    });
    return response.json();
  }