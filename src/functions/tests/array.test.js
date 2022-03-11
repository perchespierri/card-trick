import { shuffle } from '../array.js'

describe("Function shuffle", () => {

  it("Given an array, returns different array", () => {
    const orderedArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(orderedArray); 
    expect(orderedArray).not.toStrictEqual(shuffledArray)
  });

  it('Given an array, returns an array containing same elements from original', () => {
    const testArray = [1, 2, 3, 4, 5];
    const shuffledTestArray = shuffle(testArray);

    testArray.forEach(item => {
      expect(shuffledTestArray).toEqual(expect.arrayContaining([item]));
    });
  });

  it("Given an empty array, returns it", () => {
    const shuffledEmptyArray = shuffle([]);
    const expectedEmptyArray = [];
    expect(shuffledEmptyArray).toStrictEqual(expectedEmptyArray);
  });

  it("Given an array of 1 item, returns it", () => {
    const shuffledOneItemArray = shuffle([1]);
    const expectedOneItemArray = [1];
    expect(shuffledOneItemArray).toStrictEqual(expectedOneItemArray);
  });

  it("Given no arguments, returns error message", () => {
    const shuffleEmpty = shuffle();
    const expectedShuffleEmptyReturn = 'Use an iterable array';
    expect(shuffleEmpty).toStrictEqual(expectedShuffleEmptyReturn);
  });
  
  it("Given a number as parameter, returns error message", () => {
    const shuffleNumber = shuffle(2);
    const expectedShuffleNumberReturn = 'Use an iterable array';
    expect(shuffleNumber).toStrictEqual(expectedShuffleNumberReturn);
  });

});
