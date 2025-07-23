import React, { useState, useEffect } from 'react';
import { calculateAllHandProbabilities } from './cardCalculator';
import ProbabilityChart from './ProbabilityChart';

const PokerProbabilityDistribution = () => {
  const [handProbabilities, setHandProbabilities] = useState(null);

  useEffect(() => {
    const probabilities = calculateAllHandProbabilities({ numCards: 5 });
    setHandProbabilities(probabilities);
  }, []);

  return (
    <div>
      <h2 className="card-title">5-Card Poker Hand Distribution</h2>
      {handProbabilities && (
        <ProbabilityChart
          data={handProbabilities}
          title="Probability Distribution of 5-Card Poker Hands"
        />
      )}
    </div>
  );
};

export default PokerProbabilityDistribution;
