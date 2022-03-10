import { showEleventhCard, createDeck, sliceDeckInThree, switchStacks } from '../deck.js';

const testDeck52cards = createDeck();
const slicedDeck52Cards = sliceDeckInThree(testDeck52cards);

const testDeck21Cards = testDeck52cards.slice(0, 21);
const slicedDeck21Cards = sliceDeckInThree(testDeck21Cards);

const { stack1, stack2, stack3 } = slicedDeck21Cards;
const switchInitial = switchStacks('initial', stack1, stack2, stack3);
const switchMiddle = switchStacks('middle', stack1, stack2, stack3);
const switchLast = switchStacks('last', stack1, stack2, stack3);

describe("Function showEleventhCard", () => {
  it("Does not show chosen card if buttonCounter !== 3", () => {
    const eleventhCardError = showEleventhCard(1, stack1[0]);
    expect(eleventhCardError).toStrictEqual();
  });
  
  it("Shows chosen card if buttonCounter === 3", () => {
    const eleventhCardRight = showEleventhCard(3, stack1[0]);
    expect(eleventhCardRight).toStrictEqual('Fim');
  });
});

describe("Function createDeck", () => {
  it("Creates a deck of 52 cards", () => {
    expect(testDeck52cards).toHaveLength(52); 
  })

  it("Deck is an array of objects containing strings for value and suit", () => {
    expect(testDeck52cards).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          suit: expect.any(String),
          value: expect.any(String),
        })
      ])
    )}
  )
});

describe("Function sliceDeckInThree", () => { 
  it("There are three stacks of card", () => {
    expect(slicedDeck52Cards).toHaveProperty('stack1') 
    expect(slicedDeck52Cards).toHaveProperty('stack2') 
    expect(slicedDeck52Cards).toHaveProperty('stack3') 
  })
  
  it("In a 21 cards deck, stacks have 7 cards each", () => {
    expect(slicedDeck21Cards.stack1).toHaveLength(7); 
    expect(slicedDeck21Cards.stack2).toHaveLength(7); 
    expect(slicedDeck21Cards.stack3).toHaveLength(7); 
  })
});

describe("Function switchStacks", () => {
  it("Case initial - Swaps middle and initial stacks", () => {
    expect(switchInitial).toStrictEqual([...stack2, ...stack1, ...stack3]);
  });
  it("Case middle - Swaps initial and last stacks", () => {
    expect(switchMiddle).toStrictEqual([...stack3, ...stack2, ...stack1]);
  });
  it("Case last - Swaps middle and last stacks", () => {
    expect(switchLast).toStrictEqual([...stack1, ...stack3, ...stack2]);
  });
});

