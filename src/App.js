import { createDeck, shuffle } from './functions';
import Stack from './components/Stack';
import './styles/App.css';

function App() {
  const shuffledDeck = shuffle(createDeck()).slice(0, 21);

  const stack1 = shuffledDeck.slice(0, 7);
  const stack2 = shuffledDeck.slice(7, 14);
  const stack3 = shuffledDeck.slice(14, 21);

  console.log(stack1);
  return (
  
    <div className="App">  
      <div>
        <Stack stack={stack1} />
        <button> My card is in this stack </button>
      </div>
      
      <div>
        <Stack stack={stack2} />
        <button> My card is in this stack </button>
      </div>
      
      <div>
        <Stack stack={stack3} />
        <button> My card is in this stack </button>
      </div>

    </div>
  );
}

export default App;
