import React, { useState } from 'react';
import DiceForm from './DiceForm';
import ProbabilityChart from './ProbabilityChart';
import ProbabilityTable from './ProbabilityTable';
import { calculateProbabilities } from './diceCalculator';

const DiceCalculatorPage = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = ({ dice, modifier }) => {
    const newResults = calculateProbabilities({ dice, modifier });
    setResults(newResults);
  };

  return (
    <div>
      <h1>Dice Probability Calculator</h1>
      <DiceForm onCalculate={handleCalculate} />
      {results && (
        <div className="row mt-4">
          <div className="col-md-6">
            <ProbabilityTable results={results} />
          </div>
          <div className="col-md-6">
            <ProbabilityChart results={results} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DiceCalculatorPage;
