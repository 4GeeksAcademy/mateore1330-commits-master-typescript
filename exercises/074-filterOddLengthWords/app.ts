function filterOddLengthWords(words: string[]): string[] {
  // your code here
    return words.filter((item) => item.length % 2 !== 0);
}

export {};
