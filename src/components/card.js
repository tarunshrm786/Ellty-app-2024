import React from 'react';

const CardPage = ({ card, checkedItems, toggleDropdown, handleChange, handleDone }) => {
  return (
    <div key={card.id} className="card">
      <div className="row" onClick={toggleDropdown}>
        <p>All Pages</p>
        <input
          type="checkbox"
          name={`allPages${card.id}`}
        />
      </div>
      {card.expanded && (
        <div className="dropdown">
          <div className="row">
            <p>Page 1</p>
            <input
              type="checkbox"
              name="page1"
              checked={checkedItems.page1}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <p>Page 2</p>
            <input
              type="checkbox"
              name="page2"
              checked={checkedItems.page2}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <p>Page 3</p>
            <input
              type="checkbox"
              name="page3"
              checked={checkedItems.page3}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <p>Page 4</p>
            <input
              type="checkbox"
              name="page4"
              checked={checkedItems.page4}
              onChange={handleChange}
            />
          </div>
          
          <button className="done-button" onClick={handleDone}>Done</button>
        </div>
      )}
    </div>
  );
};

export default CardPage;
