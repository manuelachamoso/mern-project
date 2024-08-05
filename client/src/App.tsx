import React, { useEffect, useState } from 'react'
import './App.css'

type CollectionType = {
  title: string;
  _id: string;
}

function App() {
  const [title, setTitle] = useState("");
  const [collections, setCollections] = useState<CollectionType[]>([]);

  async function handleCreateCollection(e: React.FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:5000/collections", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify({ 
        title
      }),
    });
    setTitle("");
  }

  useEffect(() => {
    async function fetchCollections() {
      const response = await fetch("http://localhost:5000/collections");
      const newCollections = await response.json();
      setCollections(newCollections);
    }
    fetchCollections();
  }, [])

  return (
    <div className="App">
      <ul className="collections">
        {collections.map((item) => (
          <li key={item._id}>
            {item.title}
          </li>
        ))}
      </ul>

      <form className='collection-form' onSubmit={handleCreateCollection}>
        <label htmlFor="collection-title">Collection Title</label>
        <input 
          id="collection-title" 
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Collection</button>
      </form>
    </div>
  )
}

export default App
