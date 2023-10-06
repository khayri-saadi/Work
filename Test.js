const FindTheLOnGuesWord = sentence => {
  const words = sentence.split (' ');

  let longestWord = '';
  let maxWordLength = 0;
  let maxVowelCount = 0;

  for (const word of words) {
    const cleanedWord = word.replace (/[^a-zA-Z]/g, '').toLowerCase ();
    const wordLength = cleanedWord.length;
    const vowelCount = (cleanedWord.match (/[aeiou]/g) || []).length;

    if (
      wordLength > maxWordLength ||
      (wordLength === maxWordLength && vowelCount > maxVowelCount)
    ) {
      longestWord = cleanedWord;
      maxWordLength = wordLength;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
};

// Example usage:
const sentence =
  'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';
const longest = FindTheLOnGuesWord(sentence);
console.log (longest); // Output: "jumped"
