import React, { useState } from 'react';
import { createDeck, sliceDeckInThree, switchStacks, showEleventhCard } from './functions/deck.js';
import { shuffle } from './functions/array.js';
import { CARDS_TO_USE_TRICK_1 } from './constants';
import Stack from './components/Stack';
import './styles/global.css';

const deck = createDeck();
const shuffledDeck = shuffle(deck);
const deck21cards = shuffledDeck.slice(0, CARDS_TO_USE_TRICK_1);
const { stack1, stack2, stack3 } = sliceDeckInThree(deck21cards);

function App() {
  const [initialStack, setInitialStack] = useState(stack1);
  const [middleStack, setMiddleStack] = useState(stack2);
  const [lastStack, setLastStack] = useState(stack3);
  const [trickStep, setTrickStep] = useState(0);

  const handleClick = (stackName) => {

    const switchedDeck = switchStacks(stackName, initialStack, middleStack, lastStack);

    const { stack1, stack2, stack3 } = sliceDeckInThree(switchedDeck);

    setInitialStack(stack1);
    setMiddleStack(stack2);
    setLastStack(stack3);
    setTrickStep(trickStep + 1)
  };

  return (
    <div className='stacks'>  
      <Stack stack={ initialStack } />
      <button
        className='btn'
        type='button'
        value='initial'
        onClick={ ({ target: { value } }) => handleClick(value) }
      >
        My card is in this stack
      </button>
    
      <Stack stack={ middleStack } />
      <button
        className='btn'
        type='button'
        value='middle'
        onClick={ ({ target: { value } }) => handleClick(value) }
      >
        My card is in this stack
      </button>
    
      <Stack stack={ lastStack } />
      <button
        className='btn'
        type='button'
        value='last'
        onClick={ ({ target: { value } }) => handleClick(value) }
      >
        My card is in this stack
      </button>
      <div className='eleventhCard'>
      { showEleventhCard(trickStep, middleStack[3]) }
      </div>
    </div>
  );
}

export default App;
