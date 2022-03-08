import { createDeck, shuffle } from './functions';
import Stack from './components/Stack';
import './styles/global.css';

function App() {
  const CARDS_TO_SHOW = 21;
  const deck = createDeck();
  const shuffledDeck = shuffle(deck);
  const deckOf21cards = shuffledDeck.slice(0, CARDS_TO_SHOW);

  // Take 7 cards from deckOf21cards and put on each stack
  const stack1 = deckOf21cards.slice(0, 7);
  const stack2 = deckOf21cards.slice(7, 14);
  const stack3 = deckOf21cards.slice(14, 21);

  return (
  
    <div className="App">  
      <div>
        <Stack stackProp={ stack1 } />
        <button> My card is in this stack </button>
      </div>
      
      <div>
        <Stack stackProp={ stack2 } />
        <button> My card is in this stack </button>
      </div>
      
      <div>
        <Stack stackProp={ stack3 } />
        <button> My card is in this stack </button>
      </div>

    </div>
  );
}

export default App;
