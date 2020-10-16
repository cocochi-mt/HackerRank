function checkMagazineLogic(magazine: string[], note: string[]) {
  const dict = buildHistogram(magazine);

// this is v annoying LOL /ff yea

// omg
// wait
// miku
// can u compile
// i dont get it lmao
// might need to save first

//wtf
// i need to see debugging mode lolol
  for (const word of note) {
    if (dict[word] &&  dict[word] >= 1) {
      dict[word] = dict[word] - 1;
    } else {
      return "No";
    }
  }
  return "Yes";
}
// okok that makes sense
// it may evaluate to 'undefined' which is probably falsy when compared to <= 1
// nani the fuck it failed?
// maybe our solution is wrong
// bazinga still wrong
function checkMagazine(magazine: string[], note: string[]) {
  console.log(checkMagazineLogic(magazine, note));
}


// ive got a lovely bunch of coconuts
// ive got some coconuts
// nani
// why the fuck did this return true
// so annoying i cant go into debugger lmao
function buildHistogram(arr: string[]): object {
  const hist = {};
  arr.forEach((word: string) => {
    if (hist[word]) {
      hist[word] = hist[word] + 1;
    } else {
      hist[word] = 1;
    }
  });
  return hist;
}

const magazine = ["two", "times", "three", "is", "not", "four"];
const note = ["two", "times", "two", "is", "four"];

console.log(checkMagazine(magazine, note));
