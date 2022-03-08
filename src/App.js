import { createDeck, shuffle } from './functions';
import './styles/App.css';

function App() {
  const shuffledDeck = shuffle(createDeck()).slice(0, 21);

  return (
    <div className="App">  
      {shuffledDeck.map( card => 
        <li key={card}> 
          {`${card[0]} of ${card[1]}`}
        </li>
      )}
    </div>
  );
}

export default App;
