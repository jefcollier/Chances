const combinations = (n, k) => {
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }
  if (k > n / 2) {
    k = n - k;
  }
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = res * (n - i + 1) / i;
  }
  return res;
};

const calculateHandProbability = ({ handType, numCards, specificCards }) => {
  const totalCards = 52;
  const cardsInHand = numCards;

  // Total possible combinations of cardsInHand from totalCards
  const totalPossibleHands = combinations(totalCards, cardsInHand);

  let favorableHands = 0;

  switch (handType) {
    case 'royalFlush':
      // 4 suits * 1 way to get A, K, Q, J, 10 of that suit
      favorableHands = 4;
      break;
    case 'straightFlush':
      // 10 possible straights (A-5 to 10-A) * 4 suits - 4 royal flushes
      favorableHands = (10 * 4) - 4;
      break;
    case 'fourOfAKind':
      // 13 ranks * (combinations of 4 cards of that rank from 4) * (combinations of 1 card from remaining 48)
      favorableHands = 13 * combinations(4, 4) * combinations(48, 1);
      break;
    case 'fullHouse':
      // 13 ranks for 3 of a kind * combinations(4,3) * 12 ranks for 2 of a kind * combinations(4,2)
      favorableHands = 13 * combinations(4, 3) * 12 * combinations(4, 2);
      break;
    case 'flush':
      // 4 suits * (combinations of 5 cards from 13 of that suit) - straight flushes - royal flushes
      favorableHands = 4 * combinations(13, 5) - ((10 * 4) - 4) - 4;
      break;
    case 'straight':
      // 10 possible straights (A-5 to 10-A) * (4 suits for each of the 5 cards) - straight flushes - royal flushes
      favorableHands = (10 * Math.pow(4, 5)) - ((10 * 4) - 4) - 4;
      break;
    case 'threeOfAKind':
      // 13 ranks for 3 of a kind * combinations(4,3) * combinations(48,2) for remaining 2 cards (not of the same rank)
      favorableHands = 13 * combinations(4, 3) * combinations(48, 2);
      // Subtract full houses and four of a kind to avoid double counting
      favorableHands -= (13 * combinations(4, 3) * 12 * combinations(4, 2)); // Full houses
      favorableHands -= (13 * combinations(4, 4) * combinations(48, 1)); // Four of a kind
      break;
    case 'twoPair':
      // combinations(13,2) for 2 ranks * combinations(4,2) for each pair * combinations(44,1) for the kicker
      favorableHands = combinations(13, 2) * combinations(4, 2) * combinations(4, 2) * combinations(44, 1);
      break;
    case 'onePair':
      // 13 ranks for the pair * combinations(4,2) * combinations(12,3) for the 3 other ranks * Math.pow(4,3) for suits
      favorableHands = 13 * combinations(4, 2) * combinations(12, 3) * Math.pow(4, 3);
      break;
    case 'highCard':
      // Total hands - all other hands
      favorableHands = totalPossibleHands;
      favorableHands -= (4); // Royal Flush
      favorableHands -= ((10 * 4) - 4); // Straight Flush
      favorableHands -= (13 * combinations(4, 4) * combinations(48, 1)); // Four of a Kind
      favorableHands -= (13 * combinations(4, 3) * 12 * combinations(4, 2)); // Full House
      favorableHands -= (4 * combinations(13, 5) - ((10 * 4) - 4) - 4); // Flush
      favorableHands -= ((10 * Math.pow(4, 5)) - ((10 * 4) - 4) - 4); // Straight
      favorableHands -= (13 * combinations(4, 3) * combinations(48, 2) - (13 * combinations(4, 3) * 12 * combinations(4, 2)) - (13 * combinations(4, 4) * combinations(48, 1))); // Three of a Kind
      favorableHands -= (combinations(13, 2) * combinations(4, 2) * combinations(4, 2) * combinations(44, 1)); // Two Pair
      favorableHands -= (13 * combinations(4, 2) * combinations(12, 3) * Math.pow(4, 3)); // One Pair
      break;
    default:
      favorableHands = 0;
  }

  if (totalPossibleHands === 0) {
    return 0;
  }

  return (favorableHands / totalPossibleHands) * 100; // Return as percentage
};

export { calculateHandProbability };
