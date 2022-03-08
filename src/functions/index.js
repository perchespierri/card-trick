import { SUITS, VALUES } from '../constants';

export function createDeck() {
	let deck = []; 
	for(let suit = 0; suit < SUITS.length; suit++)	{
		for(let value = 0; value < VALUES.length; value++) {
			let card = [ VALUES[value], SUITS[suit] ];
			deck.push(card);
		}
	}
	return deck;
};

export function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex = 0;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  
  return array;
}
