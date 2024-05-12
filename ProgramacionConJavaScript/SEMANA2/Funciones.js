function letterFinder(word, match) {
  let i;
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log(`Found the ${match} at position ${i}`);
    } else {
      console.log(`The letter ${match} was not found at position ${i}`);
    }
  }
}

letterFinder("test", "t");