import React from 'react';

const CardProbabilityDisplay = ({ handType, numCards, specificCards, probability }) => {
  const handTypeLabels = {
    royalFlush: 'Royal Flush',
    straightFlush: 'Straight Flush',
    fourOfAKind: 'Four of a Kind',
    fullHouse: 'Full House',
    flush: 'Flush',
    straight: 'Straight',
    threeOfAKind: 'Three of a Kind',
    twoPair: 'Two Pair',
    onePair: 'One Pair',
    highCard: 'High Card',
  };

  const displayHandType = handTypeLabels[handType] || handType;

  return (
    <div className="mt-4">
      {handType && <p>Hand Type: {displayHandType}</p>}
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
