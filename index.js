const https = require('https');
function solution(sentence) {
  let newSemtenc = '';
  let clean = sentence.replace(/\./g, "");
  const sentenceArray = clean.toLowerCase().split(' ').map((word, i)=> {
      return {
        str: word,
        length: word.length,
        index: i
      }
  })

  sentenceArray.sort((a,b) => {
      if (a.length === b.length)
        return (a.index - b.index)
      return (a.length - b.length)
  });

  let i = 0;
  while (i < sentenceArray.length - 1) {
    newSemtenc += (sentenceArray[i++].str + ' ');
  }
  newSemtenc += sentenceArray[i].str;
  let res = (newSemtenc + '.')
  return res.charAt(0).toUpperCase() + res.slice(1);
}

var res = solution('The lines are printed in reverse order.');

console.log(res);


