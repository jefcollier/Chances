import React, { useState } from 'react';
import CardForm from './CardForm';
import CardProbabilityDisplay from './CardProbabilityDisplay';
import { calculateHandProbability } from './cardCalculator';

const CardCalculatorPage = () => {
  const [probabilityResults, setProbabilityResults] = useState(null);

  const handleCalculate = ({ handType, numCards, specificCards }) => {
    const calculatedProbability = calculateHandProbability({ handType, numCards, specificCards });

    setProbabilityResults({
      handType,
      numCards,
      specificCards,
      probability: calculatedProbability,
    });
  };

  return (
    <div>
      <h1>Card Probability Calculator</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Poker</h2>
          <CardForm onCalculate={handleCalculate} />
          {probabilityResults && (
            <CardProbabilityDisplay
              handType={probabilityResults.handType}
              numCards={probabilityResults.numCards}
              specificCards={probabilityResults.specificCards}
              probability={probabilityResults.probability}
            />
          )}
        </div>
        <div className="col-md-6">
          <h2>Blackjack Concepts</h2>
          <p>Content for Blackjack probability concepts will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default CardCalculatorPage;