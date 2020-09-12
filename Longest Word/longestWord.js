//an algo to find the longest word in a sentence
const sentence = "The quick brown fox jumped over the roof";

const longestWord = (sentence) => {
  let splittedSentence = sentence.split(" ");
  let maxLength = 0;
  let maxWord = "";

  splittedSentence.map(word => {
    if (word.length > maxLength) {
      maxLength = word.length;
      maxWord = word;
    }
  });

  return maxWord;
}
