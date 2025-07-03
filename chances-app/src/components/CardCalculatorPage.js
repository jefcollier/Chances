import React, { useState } from 'react';
import CardForm from './CardForm';
import CardProbabilityDisplay from './CardProbabilityDisplay';
import { calculateHandProbability } from './cardCalculator';
import BlackjackProbability from './BlackjackProbability';
import ConditionalCardProbability from './ConditionalCardProbability';

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
      <ul className="nav nav-tabs" id="cardTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="poker-tab" data-bs-toggle="tab" data-bs-target="#poker" type="button" role="tab" aria-controls="poker" aria-selected="true">Poker</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="blackjack-tab" data-bs-toggle="tab" data-bs-target="#blackjack" type="button" role="tab" aria-controls="blackjack" aria-selected="false">Blackjack Concepts</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="conditional-tab" data-bs-toggle="tab" data-bs-target="#conditional" type="button" role="tab" aria-controls="conditional" aria-selected="false">Conditional Probability</button>
        </li>
      </ul>
      <div className="tab-content" id="cardTabsContent">
        <div className="tab-pane fade show active" id="poker" role="tabpanel" aria-labelledby="poker-tab">
          <div className="card mt-3">
            <div className="card-body">
              <h2 className="card-title">Poker Hand Probability</h2>
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
          </div>
        </div>
        <div className="tab-pane fade" id="blackjack" role="tabpanel" aria-labelledby="blackjack-tab">
          <div className="card mt-3">
            <div className="card-body">
              <h2 className="card-title">Blackjack Concepts</h2>
              <BlackjackProbability />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="conditional" role="tabpanel" aria-labelledby="conditional-tab">
          <div className="card mt-3">
            <div className="card-body">
              <h2 className="card-title">Conditional Card Probability</h2>
              <ConditionalCardProbability />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCalculatorPage;