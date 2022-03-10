import { SUITS, VALUES } from '../constants';

export function createDeck() {
	let deck = []; 
  for(let suitIndex in SUITS)	{
		for(let valueIndex in VALUES) {
			const card = { value: VALUES[valueIndex], suit: SUITS[suitIndex] };
			deck = [...deck, card];
		}
	}
	return deck;
};

export function sliceDeckInThree(deck) {
  const numberOfStacks = 3;
  const stack1Index = 0;
  const stack2Index = 1;

  let stack1 = [];
  let stack2 = [];
  let stack3 = [];

  deck.forEach((card, cardIndex) => {
    const stackIndex = cardIndex % numberOfStacks;
    
    if (stackIndex === stack1Index) {
      return stack1 = [...stack1, card];
    };
    if (stackIndex === stack2Index) {
      return stack2 = [...stack2, card];
    };
    return stack3 = [...stack3, card];
  });

  return {
    stack1,
    stack2,
    stack3
  };
};

export function switchStacks({stackName, initialStack, middleStack, lastStack}) {
  let deckToSwitch = []

  switch (stackName) {
    case 'initial':
      deckToSwitch = [...middleStack, ...initialStack, ...lastStack]
      break;
    case 'last':
      deckToSwitch = [...initialStack, ...lastStack, ...middleStack]
      break;
    default:
      deckToSwitch = [...lastStack, ...middleStack, ...initialStack]
      break;
  }

  return deckToSwitch;
}
