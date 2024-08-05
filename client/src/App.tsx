import React, { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");

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

  return (
    <div className="App">
      <form onSubmit={handleCreateCollection}>
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
