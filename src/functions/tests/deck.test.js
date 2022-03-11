import { createDeck, sliceDeckInThree, switchStacks } from '../deck.js';

describe("Function createDeck", () => {
  let testDeck52cards = [];

  beforeEach(() => {
    testDeck52cards = createDeck();
  });

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
  let testDeck21Cards = [];

  beforeEach(() => {
    testDeck21Cards = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];
  });

  it('Returns an object containing a `stack1` property', () => {
    const slicedDeck = sliceDeckInThree(testDeck21Cards);
    expect(slicedDeck).toHaveProperty('stack1');
  });

  it('Returns an object containing a `stack2` property', () => {
    const slicedDeck = sliceDeckInThree(testDeck21Cards);
    expect(slicedDeck).toHaveProperty('stack2');
  });

  it('Returns an object containing a `stack3` property', () => {
    const slicedDeck = sliceDeckInThree(testDeck21Cards);
    expect(slicedDeck).toHaveProperty('stack3');
  });

  it('Returns the first stack with correct values', () => {
    const { stack1 } = sliceDeckInThree(testDeck21Cards);
    const expectedStack1 = [0, 3, 6, 9, 12, 15, 18];
    expect(stack1).toStrictEqual(expectedStack1);
  });

  it('Returns the second stack with correct values', () => {
    const { stack2 } = sliceDeckInThree(testDeck21Cards);
    const expectedStack2 = [1, 4, 7, 10, 13, 16, 19];
    expect(stack2).toStrictEqual(expectedStack2);
  });

  it('Returns the third stack with correct values', () => {
    const { stack3 } = sliceDeckInThree(testDeck21Cards);
    const expectedStack3 = [2, 5, 8, 11, 14, 17, 20];
    expect(stack3).toStrictEqual(expectedStack3);
  });

  it('Returns an array containing 7 items as `stack1` property', () => {
    const { stack1 } = sliceDeckInThree(testDeck21Cards);
    expect(stack1).toHaveLength(7);
  });

  it('Returns an array containing 7 items as `stack2` property', () => {
    const { stack2 } = sliceDeckInThree(testDeck21Cards);
    expect(stack2).toHaveLength(7);
  });

  it('Returns an array containing 7 items as `stack3` property', () => {
    const { stack3 } = sliceDeckInThree(testDeck21Cards);
    expect(stack3).toHaveLength(7);
  });
});

describe("Function switchStacks", () => {
  const testDeck21Cards = createDeck().slice(0, 21);
  const slicedDeck21Cards = sliceDeckInThree(testDeck21Cards);

  const { stack1, stack2, stack3 } = slicedDeck21Cards;
  const switchInitial = switchStacks({ stackName: 'initial', initialStack: stack1, middleStack: stack2, lastStack: stack3 });
  const switchMiddle = switchStacks({ stackName: 'middle', initialStack: stack1, middleStack: stack2, lastStack: stack3 });
  const switchLast = switchStacks({ stackName: 'last', initialStack: stack1, middleStack: stack2, lastStack: stack3 });

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

