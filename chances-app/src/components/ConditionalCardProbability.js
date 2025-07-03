import React, { useState } from 'react';

const ConditionalCardProbability = () => {
  const [targetRank, setTargetRank] = useState('');
  const [numSeen, setNumSeen] = useState(0);
  const [probability, setProbability] = useState(null);

  const calculateConditionalProbability = () => {
    const totalCardsInDeck = 52;
    const totalRanks = 13; // A, 2, 3, ..., K
    const cardsPerRank = 4; // 4 suits

    // Validate input
    if (!targetRank || !totalRanks.includes(targetRank.toUpperCase())) {
      alert('Please enter a valid card rank (e.g., A, 2, 10, K).');
      setProbability(null);
      return;
    }

    if (numSeen < 0 || numSeen > cardsPerRank) {
      alert(`Number of seen cards for ${targetRank} must be between 0 and ${cardsPerRank}.`);
      setProbability(null);
      return;
    }

    const remainingTargetCards = cardsPerRank - numSeen;
    const remainingDeck = totalCardsInDeck - numSeen; // Assuming seen cards are removed from the deck

    if (remainingDeck <= 0 || remainingTargetCards < 0) {
      setProbability(0); // No cards left or no target cards left
    } else {
      setProbability((remainingTargetCards / remainingDeck).toFixed(4));
    }
  };

  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  return (
    <div className="conditional-card-probability mt-4">
      <h4>Conditional Card Probability</h4>
      <p>Probability of drawing a specific card rank, given some have already been seen.</p>
      <div className="mb-3">
        <label htmlFor="targetRank" className="form-label">Target Card Rank (e.g., A, K, 7):</label>
        <select
          className="form-select"
          id="targetRank"
          value={targetRank}
          onChange={(e) => setTargetRank(e.target.value)}
        >
          <option value="">Select a Rank</option>
          {ranks.map(rank => (
            <option key={rank} value={rank}>{rank}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="numSeen" className="form-label">Number of this rank already seen:</label>
        <input
          type="number"
          className="form-control"
          id="numSeen"
          value={numSeen}
          onChange={(e) => setNumSeen(parseInt(e.target.value, 10) || 0)}
          min="0"
          max="4"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateConditionalProbability}>Calculate Probability</button>

      {probability !== null && (
        <div className="mt-3">
          <h5>Result:</h5>
          <p>Probability of drawing a {targetRank} is: {(probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalCardProbability;
