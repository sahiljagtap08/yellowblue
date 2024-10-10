// app/cards/page.tsx
'use client';

import { useState } from 'react';

interface Card {
  id: number;
  name: string;
  image: string;
  location: string;
}

const cardsData: Card[] = [
  { id: 1, name: 'Surprise Pokémon Plush', image: '/pokemon.jpg', location: 'Open the door! (Some door at the mix)' },
  { id: 2, name: 'Dark Chocolate', image: '/darkchocolate.webp', location: 'Open last zip of your bag!' },
  { id: 3, name: 'Go Bowling Together or Place of your choice', image: '/bowling.jpg', location: 'Place of your choice' },
];

export default function Cards() {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const revealCard = (id: number) => {
    if (!revealedCards.includes(id)) {
      setRevealedCards([...revealedCards, id]);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Choose a Card - That will be your main gift!</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {cardsData.map((card) => (
          <div key={card.id} style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => revealCard(card.id)}>
            {!revealedCards.includes(card.id) ? (
              <div style={{ width: '150px', height: '200px', backgroundColor: '#43ffbd' }}>
                <p>Click to Reveal</p>
              </div>
            ) : (
              <div>
                <img src={card.image} alt={card.name} style={{ width: '150px', height: '200px' }} />
                <p>{card.name}</p>
                <p>{card.location}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {revealedCards.length > 0 && revealedCards.length !== cardsData.length && (
        <p>Hurray! Only because you are too beautiful, you get a chance to pick all the three gifts!</p>
      )}
    </div>
  );
}