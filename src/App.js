import { createDeck, shuffle } from './functions';
import Stack from './components/Stack';
import './styles/global.css';
import './styles/button.css';
const CARDS_TO_SHOW = 21;

function App() {
  const deck = createDeck();
  const shuffledDeck = shuffle(deck);
  const deckOf21cards = shuffledDeck.slice(0, CARDS_TO_SHOW);

  // Take 7 cards from deckOf21cards and put on each stack
  const stack1 = deckOf21cards.slice(0, 7);
  const stack2 = deckOf21cards.slice(7, 14);
  const stack3 = deckOf21cards.slice(14, 21);

  return (
    <div className='stacks'>  
      <Stack stackProp={ stack1 } />
      <button className='btn'> My card is in this stack </button>
    
      <Stack stackProp={ stack2 } />
      <button className='btn'> My card is in this stack </button>
    
      <Stack stackProp={ stack3 } />
      <button className='btn'> My card is in this stack </button>
    </div>
  );
}

export default App;
