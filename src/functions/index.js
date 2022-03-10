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

export function shuffle(array) {
  let currentIndex = array.length;
  const shuffledArray = [...array];

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }
  
  return shuffledArray;
};

export function sliceDeckInThree(deckParam) {
  const deck = deckParam;
  
  let stack1 = []; // index 0 3 6 9  12 15 18 = " index % 3 === 0 "
  let stack2 = []; // index 1 4 7 10 13 16 19
  let stack3 = []; // index 2 5 8 11 14 17 20

  deck.forEach((card, cardIndex) => {
    if (cardIndex % 3 === 0) {
      return stack1 = [...stack1, card];
    };
    if ([1, 4, 7, 10, 13, 16, 19].includes(cardIndex)) {
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

export function switchStacks(deckToSwitch, stackName, initialStack, middleStack, lastStack) {
  switch (stackName) {
    case 'initial':
      deckToSwitch = [...middleStack, ...initialStack, ...lastStack]
      break;
    case 'middle':
      if(Math.floor(Math.random() * 2 + 1) === 2) {
        return deckToSwitch = [...lastStack, ...middleStack, ...initialStack]
      }
      else return deckToSwitch = [...initialStack, ...middleStack, ...lastStack]
    case 'last':
      deckToSwitch = [...initialStack, ...lastStack, ...middleStack]
      break;
    default:
      break;
  }
  
  return deckToSwitch;
}

export function showEleventhCard(buttonCounter, card) {
  if (buttonCounter % 3 === 0 && buttonCounter > 0) { 
    console.log('Clicou ' + buttonCounter + ' vezes');
    return (
      <div>
        <br />
        <h1>YOUR CARD IS {`${card.value} of ${card.suit}`}</h1>
      </div>
    );
  } 
}
