import React, { useState } from 'react';

const DiceForm = ({ onCalculate }) => {
  const [dice, setDice] = useState([
    { sides: 4, count: 0 },
    { sides: 6, count: 0 },
    { sides: 8, count: 0 },
    { sides: 10, count: 0 },
    { sides: 12, count: 0 },
    { sides: 20, count: 0 },
  ]);
  const [modifier, setModifier] = useState(0);
  const [shortHandInput, setShortHandInput] = useState('');
  const [useShortHand, setUseShortHand] = useState(true);

  const handleCountChange = (index, newCount) => {
    const updatedDice = [...dice];
    updatedDice[index].count = newCount >= 0 ? newCount : 0;
    setDice(updatedDice);
  };

  const handleToggleInput = () => {
    setUseShortHand(!useShortHand);
    // Clear values when toggling input method
    if (useShortHand) { // Was using shorthand, switching to detailed
      setShortHandInput('');
    } else { // Was using detailed, switching to shorthand
      setDice(dice.map(d => ({ ...d, count: 0 })));
      setModifier(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let calculatedDice = [...dice];
    let calculatedModifier = modifier;

    if (useShortHand) {
      const parsed = parseShortHand(shortHandInput);
      calculatedDice = parsed.dice;
      calculatedModifier = parsed.modifier;
    }

    onCalculate({ dice: calculatedDice, modifier: calculatedModifier });
  };

  const parseShortHand = (input) => {
    const newDice = [
      { sides: 4, count: 0 },
      { sides: 6, count: 0 },
      { sides: 8, count: 0 },
      { sides: 10, count: 0 },
      { sides: 12, count: 0 },
      { sides: 20, count: 0 },
    ];
    let newModifier = 0;

    const parts = input.split(/([+-])/).filter(Boolean); // Split by + or - but keep the delimiter
    let currentSign = 1; // 1 for +, -1 for -

    parts.forEach((part) => {
      part = part.trim();
      if (part === '+') {
        currentSign = 1;
      } else if (part === '-') {
        currentSign = -1;
      } else if (part.includes('d')) {
        const [countStr, sidesStr] = part.split('d');
        const count = parseInt(countStr, 10) || 1;
        const sides = parseInt(sidesStr, 10);

        const diceIndex = newDice.findIndex(d => d.sides === sides);
        if (diceIndex !== -1) {
          newDice[diceIndex].count += count * currentSign;
        }
      } else {
        const value = parseInt(part, 10);
        if (!isNaN(value)) {
          newModifier += value * currentSign;
        }
      }
    });

    return { dice: newDice, modifier: newModifier };
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={useShortHand}
          onChange={handleToggleInput}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {useShortHand ? 'Use Shorthand Input' : 'Use Detailed Input'}
        </label>
      </div>

      {useShortHand ? (
        <div className="mb-3">
          <label htmlFor="shortHandInput" className="form-label">Short-hand Input (e.g., 2d4+3+4d6+11)</label>
          <input
            type="text"
            className="form-control"
            id="shortHandInput"
            value={shortHandInput}
            onChange={(e) => setShortHandInput(e.target.value)}
            placeholder="e.g., 2d4+3+4d6+11"
          />
        </div>
      ) : (
        <>
          {dice.map((d, index) => (
            <div className="input-group mb-3" key={d.sides}>
              <input
                type="number"
                className="form-control"
                id={`d${d.sides}`}
                value={d.count}
                onChange={(e) => handleCountChange(index, parseInt(e.target.value, 10) || 0)}
                min="0"
              />
              <span className="input-group-text text-end">d{d.sides}</span>
            </div>
          ))}
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              id="modifier"
              value={modifier}
              onChange={(e) => setModifier(parseInt(e.target.value, 10) || 0)}
            />
            <span className="input-group-text text-end">+Modifier</span>
          </div>
        </>
      )}
      <button type="submit" className="btn btn-primary w-100">Calculate</button>
    </form>
  );
};

export default DiceForm;
