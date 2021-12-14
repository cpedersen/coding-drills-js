const a = "fcrxzwscanmligyxyvym";
const b = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";

const makeAnagram = (left, right) => {
  const count = new Array(26).fill(0);
  const pos = (s) => {
    return s.charCodeAt(0) - "a".charCodeAt(0);
  };

  for (let i = 0; i < left.length; ++i) {
    count[pos(left.charAt(i))]++;
  }

  for (let i = 0; i < right.length; ++i) {
    count[pos(right.charAt(i))]--;
  }

  // console.log(count);

  const diff = count.reduce((p, c) => {
    return Math.abs(p) + Math.abs(c);
  }, 0);

  return diff;
};

const result = makeAnagram(a, b);
console.log(result);
