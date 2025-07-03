import React from 'react';

const ProbabilityTable = ({ results }) => {
  if (!results) return null;

  return (
    <div>
      <h2>Probability Distribution</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Total Roll</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results).map(([total, probability]) => (
            <tr key={total}>
              <td>{total}</td>
              <td>{(probability * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProbabilityTable;
