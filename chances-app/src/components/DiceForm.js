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

  const handleCountChange = (index, newCount) => {
    const updatedDice = [...dice];
    updatedDice[index].count = newCount >= 0 ? newCount : 0;
    setDice(updatedDice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ dice, modifier });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row justify-content-center">
        {dice.map((d, index) => (
          <div className="col-sm-4 col-md-3 col-lg-2 mb-2" key={d.sides}>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id={`d${d.sides}`}
                value={d.count}
                onChange={(e) => handleCountChange(index, parseInt(e.target.value, 10) || 0)}
                min="0"
              />
              <span className="input-group-text">d{d.sides}</span>
            </div>
          </div>
        ))}
        <div className="col-sm-4 col-md-3 col-lg-2 mb-2">
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="modifier"
              value={modifier}
              onChange={(e) => setModifier(parseInt(e.target.value, 10) || 0)}
            />
            <span className="input-group-text">Modifier</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-3 col-lg-2 mt-3">
          <button type="submit" className="btn btn-primary w-100">Calculate</button>
        </div>
      </div>
    </form>
  );
};

export default DiceForm;
