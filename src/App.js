import { createDeck, shuffle, sliceDeckInThree } from './functions';
import Stack from './components/Stack';
import './styles/global.css';
const CARDS_TO_SHOW = 21;

function App() {
  const deck = createDeck();
  const shuffledDeck = shuffle(deck);
  const deckOf21cards = shuffledDeck.slice(0, CARDS_TO_SHOW);
  const { initialStack, middleStack, lastStack } = sliceDeckInThree(deckOf21cards);

  const handleClick = () => {
    console.log('Cheguei aqui')
  }

  return (
    <div className='stacks'>  
      <Stack stack={ initialStack } />
      <button
        className='btn'
        type='button'
        onClick={ handleClick }
      >
        My card is in this stack
      </button>
    
      <Stack stack={ middleStack } />
      <button
        className='btn'
        type='button'
        onClick={ handleClick }
      >
        My card is in this stack
      </button>
    
      <Stack stack={ lastStack } />
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
