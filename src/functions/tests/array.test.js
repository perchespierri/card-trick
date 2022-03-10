import { shuffle } from '../array.js'

const orderedArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(orderedArray);

const arrayOfTruth = shuffledArray.map((element) => {
  if (orderedArray.includes(element)) return true
  else return false
});

const shuffleEmptyArray = shuffle([]);

describe("Function shuffle should return a shuffled array", () => {
  it("Shuffled array has same elements and length than the original", () => {
    expect(arrayOfTruth).toStrictEqual([true, true, true, true, true]);
    // melhorar com o arryContaining e etc 
  });

  it("Ordered and shuffled arrays are actually different", () => {
    expect(orderedArray).not.toStrictEqual(shuffledArray)
  });

  it("Given an empty array, returns it", () => {
    expect(shuffleEmptyArray).toStrictEqual('Use an iterable array');
  });

  it("Given no arguments, returns nothing", () => {
    expect(shuffle([])).toStrictEqual('Use an iterable array');
  });
  
  it("Given an array of 1 item, returns it", () => {
    expect(shuffle(2)).toStrictEqual('Use an iterable array');
  });

});
