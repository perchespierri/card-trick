import { SUITS, VALUES } from '../constants';

export function createDeck() {
	let deck = []; 
	for(let suitIndex = 0; suitIndex < SUITS.length; suitIndex++)	{
		for(let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
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
}
