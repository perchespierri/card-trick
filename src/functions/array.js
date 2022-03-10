export function shuffle(array) {
  if (array.length === 0 || typeof array === 'number') {
    return 'Use an iterable array';
  }
  
  let currentIndex = array.length;
  const shuffledArray = [...array];

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }
  
  return shuffledArray;
};
