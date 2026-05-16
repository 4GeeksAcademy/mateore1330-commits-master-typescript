function findMinLengthOfThreeWords(word1: string, word2: string, word3: string): number {
  // your code here
  let minLength = Math.min(word1.length, word2.length, word3.length);
  return minLength;
}

export {};
