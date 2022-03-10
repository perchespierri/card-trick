import { shuffle } from '../array.js'

const orderedArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(orderedArray);

const arrayOfTruth = shuffledArray.map((element) => {
  if (orderedArray.includes(element)) return true
  else return false
});

describe("Function shuffle should return a shuffled array", () => {
  it("Shuffled array has same elements and length than the original", () => {
    expect(arrayOfTruth).toStrictEqual([true, true, true, true, true]); 
  });

});
