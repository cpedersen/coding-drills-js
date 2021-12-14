let string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
let reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence);

// Output becomes emocleW ot siht tpircsavaJ !ediuG
let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEachWord);

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
