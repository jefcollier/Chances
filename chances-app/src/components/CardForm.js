import React, { useState } from 'react';

const CardForm = ({ onCalculate }) => {
  const [handType, setHandType] = useState('');
  const [numCards, setNumCards] = useState(5); // Default for poker hands
  const [specificCards, setSpecificCards] = useState(''); // e.g., "As, Ks, Qs"

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ handType, numCards, specificCards });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="handType" className="form-label">Select Common Hand:</label>
        <select
          id="handType"
          className="form-select"
          value={handType}
          onChange={(e) => setHandType(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="royalFlush">Royal Flush</option>
          <option value="straightFlush">Straight Flush</option>
          <option value="fourOfAKind">Four of a Kind</option>
          <option value="fullHouse">Full House</option>
          <option value="flush">Flush</option>
          <option value="straight">Straight</option>
          <option value="threeOfAKind">Three of a Kind</option>
          <option value="twoPair">Two Pair</option>
          <option value="onePair">One Pair</option>
          <option value="highCard">High Card</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="numCards" className="form-label">Number of Cards to Draw:</label>
        <input
          type="number"
          id="numCards"
          className="form-control"
          value={numCards}
          onChange={(e) => setNumCards(parseInt(e.target.value))}
          min="1"
          max="52"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="specificCards" className="form-label">Specific Cards (e.g., As, Ks, Qs):</label>
        <input
          type="text"
          id="specificCards"
          className="form-control"
          value={specificCards}
          onChange={(e) => setSpecificCards(e.target.value)}
          placeholder="Comma-separated list (e.g., Ah, Kd)"
        />
      </div>

      <button type="submit" className="btn btn-primary">Calculate Probability</button>
    </form>
  );
};

export default CardForm;
