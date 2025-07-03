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
    <div className="card mt-4">
      <div className="card-body">
        <h1 className="card-title">Dice Probability Calculator</h1>
        <div className="row">
          <div className="col-md-6">
            <DiceForm onCalculate={handleCalculate} />
          </div>
          <div className="col-md-6">
            {/* This column can be used for other elements if needed, or left empty */}
          </div>
        </div>
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
    </div>
  );
};

export default DiceCalculatorPage;
