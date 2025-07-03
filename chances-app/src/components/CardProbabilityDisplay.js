import React from 'react';

const CardProbabilityDisplay = ({ handType, numCards, specificCards, probability }) => {
  return (
    <div className="mt-4">
      <h2>Probability Results:</h2>
      {handType && <p>Hand Type: {handType}</p>}
      {numCards && <p>Number of Cards: {numCards}</p>}
      {specificCards && <p>Specific Cards: {specificCards}</p>}
      {probability !== null ? (
        <p>Probability: {probability}%</p>
      ) : (
        <p>Select options and calculate to see results.</p>
      )}
    </div>
  );
};

export default CardProbabilityDisplay;
