import React, { useState } from 'react';
import { createDeck, sliceDeckInThree, switchStacks } from './functions/deck.js';
import { shuffle } from './functions/array.js';
import { CARDS_TO_USE_TRICK_1, FINAL_TRICK_STEP, ELEVENTH_CARD } from './constants';
import Stack from './components/Stack';
import Button from './components/Button';
import ChosenCard from './components/ChosenCard';
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

    const switchedDeck = switchStacks({
      stackName, initialStack, middleStack, lastStack
    });

    const { stack1, stack2, stack3 } = sliceDeckInThree(switchedDeck);

    setInitialStack(stack1);
    setMiddleStack(stack2);
    setLastStack(stack3);
    setTrickStep(trickStep + 1)
  };

  return (trickStep === FINAL_TRICK_STEP ? (
    <ChosenCard card={middleStack[ELEVENTH_CARD]} />) : (  
      <div className='stacks'>  
        <Stack stack={ initialStack } /> 
        <Button value='initial' onClick={ handleClick }/>
      
        <Stack stack={ middleStack } />
        <Button value='middle' onClick={ handleClick }/>
      
        <Stack stack={ lastStack } />
        <Button value='last' onClick={ handleClick }/>
      </div>
    )
  );
}

export default App;
