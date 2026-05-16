function findMaxLengthOfThreeWords(word1: string, word2: string, word3: string): number {
  // your code here
  let maxLength = Math.max(word1.length, word2.length, word3.length);
  return maxLength;
}

export {};
