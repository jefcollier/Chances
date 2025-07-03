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
            {results && (
              <div className="row mt-4">
                <div className="col-md-12">
                  <ProbabilityTable results={results} />
                </div>
                <div className="col-md-12">
                  <ProbabilityChart results={results} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceCalculatorPage;
