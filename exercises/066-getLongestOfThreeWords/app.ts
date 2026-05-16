function getLongestOfThreeWords(word1: string, word2: string, word3: string): string {
  // your code here
  let aux = '';
  if (word1.length > aux.length) aux = word1;
  if (word2.length > aux.length) aux = word2;
  if (word3.length > aux.length) aux = word3;
  return aux;
}

export {};
