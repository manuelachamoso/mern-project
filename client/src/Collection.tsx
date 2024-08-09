import React, { useEffect, useState } from 'react'
import './Collection.css'
import { Link, useParams } from 'react-router-dom';
import { CollectionType } from './api/getCollections';
import { createCard } from './api/createCard';
import { getCollection } from './api/getCollection';
import { deleteCard } from './api/deleteCard';

function Collection() {
  const [collection, setCollection] = useState<CollectionType | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { collectionId } = useParams();


  async function handleCreateCollection(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createCard(collectionId!, text);
    console.log('Created card:', serverCards);
    setCards(serverCards)
    setText("");
  }

  async function handleDeleteCard(index: number) {
    if (!collectionId) return;
    const newCollection = await deleteCard(collectionId, index)
    setCards(newCollection.cards);
  }

  useEffect(() => {
    async function fetchCollection() {
      if (!collectionId) return;

      const newCollection = await getCollection(collectionId);
      setCollection(newCollection);
      setCards(newCollection.cards);
    }
    fetchCollection();
  }, [collectionId])

  
  return (
    <div className="Collection">
      <Link to="/" className='collection-back'>Back</Link>
      <h1>{collection?.title}</h1>
      <ul className="cards">
        {cards.map((card, index) => (
          <li className='cards-item' key={index}>
            <button className='cards-delete' onClick={() => handleDeleteCard(index)}>X</button>
            <p className='cards-title'>{card}</p>
          </li>
        ))}
      </ul>
      <form className='cards-form' onSubmit={handleCreateCollection}>
        <label htmlFor="card-text">Card Text</label>
        <input
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}

export default Collection
