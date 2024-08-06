import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { deleteCollections } from './api/deleteCollections';
import { CollectionType, getCollections } from './api/getCollections';
import { createCollection } from './api/createCollections';

function App() {
  const [title, setTitle] = useState("");
  const [collections, setCollections] = useState<CollectionType[]>([]);

  async function handleCreateCollection(e: React.FormEvent) {
    e.preventDefault();
    const collection = await createCollection(title);
    setCollections([...collections, collection]);
    setTitle("");
  }

  async function handleDeleteCollection(collectionId: string) {
    await deleteCollections(collectionId)
    setCollections(collections.filter((collection) => collection._id!== collectionId));
  }

  useEffect(() => {
    async function fetchCollections() {
      const newCollections = await getCollections();
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
            <Link className='collection-title' to={`collections/${item._id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <form className='collection-form' onSubmit={handleCreateCollection}>
        <label htmlFor="collection-input">Collection Title</label>
        <input 
          id="collection-input" 
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
