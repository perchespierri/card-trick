import { createDeck, shuffle } from './functions';
import './styles/global.css';

function App() {
  const CARDS_TO_SHOW = 21;
  const deck = createDeck();
  const shuffledDeck = shuffle(deck);
  const deckOf21cards = shuffledDeck.slice(0, CARDS_TO_SHOW);

  return (
    <div className="App">  
      {deckOf21cards.map( card => 
        <li key={`${card.CardValue} ${card.CardSuit}`}> 
          {`${card.CardValue} of ${card.CardSuit}`}
        </li>
      )}
    </div>
  );
}

export default App;
