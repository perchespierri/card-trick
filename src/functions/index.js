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
  const tempArray = [...array];

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [tempArray[currentIndex], tempArray[randomIndex]] = [
      tempArray[randomIndex], tempArray[currentIndex]];
  }
  
  return tempArray;
};

export function sliceDeckInThree(deck) {
  const deckToSplice = deck;
  
  const initialStack = deckToSplice.splice(0, 7); 
  const middleStack = deckToSplice.splice(0, 7); 
  const lastStack = deckToSplice.splice(0, 7); 
  
  return {
    initialStack,
    middleStack,
    lastStack
  };
};
