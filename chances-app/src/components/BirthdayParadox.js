import React, { useState } from 'react';

const BirthdayParadox = () => {
  const [numPeople, setNumPeople] = useState(2);
  const [probability, setProbability] = useState(null);

  const calculateBirthdayProbability = () => {
    if (numPeople < 2 || numPeople > 365) {
      alert('Number of people must be between 2 and 365.');
      setProbability(null);
      return;
    }

    let p = 1;
    for (let i = 0; i < numPeople; i++) {
      p = p * (365 - i) / 365;
    }
    setProbability((1 - p).toFixed(4));
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4 className="card-title">Birthday Paradox</h4>
        <p className="card-text">Probability of at least two people sharing a birthday in a group.</p>
        <div className="mb-3">
          <label htmlFor="numPeople" className="form-label">Number of People:</label>
        <input
          type="number"
          className="form-control"
          id="numPeople"
          value={numPeople}
          onChange={(e) => setNumPeople(parseInt(e.target.value, 10) || 0)}
          min="2"
          max="365"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateBirthdayProbability}>Calculate Probability</button>

      {probability !== null && (
        <div className="mt-3">
          <h5>Result:</h5>
          <p>Probability of shared birthday: {(probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BirthdayParadox;
