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
    const response = await fetch("http://localhost:5000/collections", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify({ 
        title
      }),
    });
    const collection = await response.json();
    setCollections([...collections, collection]);
    setTitle("");
  }

  async function handleDeleteCollection(collectionId: string) {
    await fetch(`http://localhost:5000/collections/${collectionId}`, {
      method: 'DELETE',
    });
    setCollections(collections.filter((collection) => collection._id!== collectionId));
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
          <li className="collections-item" key={item._id}>
            <button className="collection-delete" onClick={() => handleDeleteCollection(item._id)}>X</button>
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
