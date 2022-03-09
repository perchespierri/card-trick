import { createDeck, shuffle, deckSlicer } from './functions';
import Stack from './components/Stack';
import './styles/global.css';
const CARDS_TO_SHOW = 21;

function App() {
  const deck = createDeck();
  const shuffledDeck = shuffle(deck);
  const deckOf21cards = shuffledDeck.slice(0, CARDS_TO_SHOW);

  const handleClick = () => {
    console.log('Cheguei aqui')
  }

  return (
    <div className='stacks'>  
      <Stack stackProp={ deckSlicer(deckOf21cards, 0, 7) } />
      <button
        className='btn'
        type='button'
        onClick={ handleClick }
      >
        My card is in this stack
      </button>
    
      <Stack stackProp={ deckSlicer(deckOf21cards, 7, 14) } />
      <button
        className='btn'
        type='button'
        onClick={ handleClick }
      >
        My card is in this stack
      </button>
    
      <Stack stackProp={ deckSlicer(deckOf21cards, 14, 21) } />
      <button
        className='btn'
        type='button'
        onClick={ handleClick }
      >
        My card is in this stack
      </button>
    </div>
  );
}

export default App;
