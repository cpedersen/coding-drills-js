function mostCommonNaiveSolution(s) {
  if (s.length === 0) {
    return null;
  }

  s = s.toLowerCase();

  let maxOccurrences = 0;
  let mostCommonCharacter = null;

  // Loop over every type of letter
  for (let i = 0; i < 26; i++) {
    // Convert number to an a-z character
    const character = String.fromCharCode(97 + i);

    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s.charAt(j) == character) {
        count++;
      }
    }

    if (count > maxOccurrences) {
      mostCommonCharacter = character;
      maxOccurrences = count;
    }
  }
  return mostCommonCharacter;
}

console.log(mostCommonNaiveSolution("Cathy Pedersen"));

function mostCommonBetterSolution(s) {
  if (s.length === 0) {
    return null;
  }

  s = s.toLowerCase();

  const characters = {};
  for (let i = 0; i < s.length; i++) {
    var character = s.charAt(i);
    const characterCode = s.charCodeAt(i);
    if (characterCode < 97 || characterCode > 122) {
      // Filter non a-z characters
      continue;
    }

    if (!(character in characters)) {
      characters[character] = 1;
    } else {
      characters[character]++;
    }
  }

  let mostCommonCharacter = null;
  let maxOccurrences = 0;
  for (let character in characters) {
    const count = characters[character];

    if (count > maxOccurrences) {
      mostCommonCharacter = character;
      maxOccurrences = count;
    }
  }
  return mostCommonCharacter;
}

console.log(mostCommonBetterSolution("Cathy Pedersen"));

let val1 = String.fromCharCode(24);
console.log(val1);
