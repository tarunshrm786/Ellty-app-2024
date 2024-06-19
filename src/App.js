import React, { useState } from 'react';
import './App.css';
import CardPage from './components/card';

function App() {
  const [cards, setCards] = useState([
    { id: 1, expanded: false },
    { id: 2, expanded: false },
    { id: 3, expanded: false },
    { id: 4, expanded: false },
    { id: 5, expanded: false },
    { id: 6, expanded: false },
    { id: 7, expanded: false },
  ]);

  const [checkedItems, setCheckedItems] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const toggleDropdown = (id) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, expanded: !card.expanded } : card
    ));
  };

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDone = () => {
    alert('Done button clicked!');
  };

  return (
    <div className="container">
      {cards.map(card => (
        <CardPage
          key={card.id}
          card={card}
          checkedItems={checkedItems}
          toggleDropdown={() => toggleDropdown(card.id)}
          handleChange={handleChange}
          handleDone={handleDone}
        />
      ))}
    </div>
  );
}

export default App;
