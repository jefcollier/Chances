import React, { useState } from 'react';

// Helper to get card numerical value
const getCardValue = (card) => {
  if (['J', 'Q', 'K'].includes(card)) {
    return 10;
  }
  if (card === 'A') {
    return 11; // Initially treat Ace as 11, adjust later if bust
  }
  return parseInt(card, 10);
};

// Helper to calculate hand value, handling Aces
const calculateHandValue = (hand) => {
  let value = 0;
  let numAces = 0;
  for (const card of hand) {
    if (card === 'A') {
      numAces++;
      value += 11;
    } else {
      value += getCardValue(card);
    }
  }

  while (value > 21 && numAces > 0) {
    value -= 10; // Change Ace from 11 to 1
    numAces--;
  }
  return value;
};

const BlackjackProbability = () => {
  const [playerHand, setPlayerHand] = useState('');
  const [playerHandTotal, setPlayerHandTotal] = useState(null);
  const [dealerUpCard, setDealerUpCard] = useState('');
  const [bustProbability, setBustProbability] = useState(null);
  const [twentyOneProbability, setTwentyOneProbability] = useState(null);
  const [safeTotalProbability, setSafeTotalProbability] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const calculateProbability = () => {
    const deck = [];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let i = 0; i < 4; i++) { // 4 suits
      for (const rank of ranks) {
        deck.push(rank);
      }
    }

    // Parse player's hand
    const playerHandArray = playerHand.split(',').map(card => card.trim().toUpperCase());
    // Validate player hand input
    if (playerHandArray.some(card => !ranks.includes(card))) {
      alert('Invalid card in player hand. Please use 2-10, J, Q, K, A.');
      setBustProbability(null);
      setTwentyOneProbability(null);
      setSafeTotalProbability(null);
      return;
    }

    // Parse dealer's up-card
    const dealerCard = dealerUpCard.trim().toUpperCase();
    // Validate dealer up-card input
    if (dealerCard && !ranks.includes(dealerCard)) {
      alert('Invalid dealer up card. Please use 2-10, J, Q, K, A.');
      setBustProbability(null);
      setTwentyOneProbability(null);
      setSafeTotalProbability(null);
      return;
    }

    // Create a copy of the deck and remove known cards
    let remainingDeck = [...deck];
    for (const card of playerHandArray) {
      const index = remainingDeck.indexOf(card);
      if (index > -1) {
        remainingDeck.splice(index, 1);
      }
    }
    if (dealerCard) {
      const dealerCardIndex = remainingDeck.indexOf(dealerCard);
      if (dealerCardIndex > -1) {
        remainingDeck.splice(dealerCardIndex, 1);
      }
    }

    let bustCount = 0;
    let twentyOneCount = 0;
    let safeTotalCount = 0;
    let totalPossibleDraws = 0;

    // Simulate drawing one more card
    for (const card of remainingDeck) {
      totalPossibleDraws++;
      const newHand = [...playerHandArray, card];
      const newHandValue = calculateHandValue(newHand);

      if (newHandValue > 21) {
        bustCount++;
      } else if (newHandValue === 21) {
        twentyOneCount++;
        safeTotalCount++; // 21 is also a safe total
      } else if (newHandValue >= 17 && newHandValue < 21) {
        safeTotalCount++;
      }
    }

    if (totalPossibleDraws === 0) {
      setBustProbability(0);
      setTwentyOneProbability(0);
      setSafeTotalProbability(0);
    } else {
      setBustProbability((bustCount / totalPossibleDraws).toFixed(2));
      setTwentyOneProbability((twentyOneCount / totalPossibleDraws).toFixed(2));
      setSafeTotalProbability((safeTotalCount / totalPossibleDraws).toFixed(2));

      // Basic recommendation logic
      if (bustCount / totalPossibleDraws > 0.5) {
        setRecommendation('Stand');
      } else if (safeTotalCount / totalPossibleDraws > 0.5) {
        setRecommendation('Hit');
      } else {
        setRecommendation('Consider your options carefully.');
      }
    }
  };

  return (
    <div className="blackjack-probability">
      <h3>Hit or Stand Probability</h3>
      <div className="mb-3">
        <label htmlFor="playerHand" className="form-label">Your Hand (e.g., A,5 or 10,K): {playerHandTotal !== null && `(${playerHandTotal})`}</label>
        <input
          type="text"
          className="form-control"
          id="playerHand"
          value={playerHand}
          onChange={(e) => {
            setPlayerHand(e.target.value);
            const handArray = e.target.value.split(',').map(card => card.trim().toUpperCase());
            // Only calculate total if handArray is not empty and contains valid cards
            if (handArray.length > 0 && handArray[0] !== '') {
              setPlayerHandTotal(calculateHandValue(handArray));
            } else {
              setPlayerHandTotal(null);
            }
          }}
          placeholder="e.g., A,5 or 10,K"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dealerUpCard" className="form-label">Dealer's Up Card (optional, e.g., 7 or Q):</label>
        <input
          type="text"
          className="form-control"
          id="dealerUpCard"
          value={dealerUpCard}
          onChange={(e) => setDealerUpCard(e.target.value)}
          placeholder="e.g., 7 or Q"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateProbability}>Calculate Hit Probability</button>

      {bustProbability !== null && (
        <div className="mt-3">
          <h4>Results:</h4>
          <p>Probability of busting if you hit: {bustProbability * 100}%</p>
          {twentyOneProbability !== null && <p>Probability of reaching 21 if you hit: {twentyOneProbability * 100}%</p>}
          {safeTotalProbability !== null && <p>Probability of reaching a safe total (17-21) if you hit: {safeTotalProbability * 100}%</p>}
          {recommendation && <p>Recommendation: <strong>{recommendation}</strong></p>}
        </div>
      )}
    </div>
  );
};

export default BlackjackProbability;