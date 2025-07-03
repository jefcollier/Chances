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
  );
};

export default CardCalculatorPage;