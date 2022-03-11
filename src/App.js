import React, { useState } from 'react';
import { createDeck, sliceDeckInThree, switchStacks } from './functions/deck.js';
import { shuffle } from './functions/array.js';
import { CARDS_TO_USE_TRICK_1, FINAL_TRICK_1_STEP, ELEVENTH_CARD, FIRST_TRICK_1_STEP } from './constants';
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
  const [trickStep, setTrickStep] = useState(FIRST_TRICK_1_STEP);

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

  const handleReset = (FIRST_TRICK_1_STEP) => {
    const deck = createDeck();
    const shuffledDeck = shuffle(deck);
    const deck21cards = shuffledDeck.slice(0, CARDS_TO_USE_TRICK_1);
    const { stack1, stack2, stack3 } = sliceDeckInThree(deck21cards);

    setInitialStack(stack1);
    setMiddleStack(stack2);
    setLastStack(stack3);
    setTrickStep(FIRST_TRICK_1_STEP)
  }

  if(trickStep === FINAL_TRICK_1_STEP) {
    return (
      <div>
        <ChosenCard card={middleStack[ELEVENTH_CARD]} />
        <br />
        <Button value={FIRST_TRICK_1_STEP} buttonText='Play again' onClick={ handleReset }/>
      </div>
    );
  } 
  
  return (
    <div className='stacks'>  
      <h1>CHOOSE A CARD</h1>
      <h1>CLICK ON THE STACK IT IS</h1>
      <h1>DO THAT 3 TIMES AND I'LL GUESS YOUR CARD</h1>
      <Stack stack={ initialStack } /> 
      <Button value='initial' buttonText='My card is in this stack' onClick={ handleClick }/>
    
      <Stack stack={ middleStack } />
      <Button value='middle' buttonText='My card is in this stack' onClick={ handleClick }/>
    
      <Stack stack={ lastStack } />
      <Button value='last' buttonText='My card is in this stack' onClick={ handleClick }/>
    </div>
  );
}

export default App;
