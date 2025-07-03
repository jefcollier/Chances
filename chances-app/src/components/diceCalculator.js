export const calculateProbabilities = ({ dice, modifier }) => {
  const activeDice = dice.filter(d => d.count > 0);

  if (activeDice.length === 0) {
    return {};
  }

  let probabilities = { 0: 1 };

  activeDice.forEach(({ sides, count }) => {
    for (let i = 0; i < count; i++) {
      const nextProbabilities = {};
      for (const [sum, prob] of Object.entries(probabilities)) {
        for (let side = 1; side <= sides; side++) {
          const newSum = parseInt(sum) + side;
          nextProbabilities[newSum] = (nextProbabilities[newSum] || 0) + prob / sides;
        }
      }
      probabilities = nextProbabilities;
    }
  });

  const finalProbabilities = {};
  for (const [sum, prob] of Object.entries(probabilities)) {
    const newSum = parseInt(sum) + modifier;
    finalProbabilities[newSum] = (finalProbabilities[newSum] || 0) + prob;
  }

  return finalProbabilities;
};
