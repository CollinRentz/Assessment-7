// 1

function addToZero(numbers, sum) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === sum)
          return true;
      }
    }
    return false;
  }
  
  let array = addToZero([], 0);
  console.log(array);
  // -> False

  array = addToZero([1], 0);
  console.log(array);
  // -> False

  array = addToZero([1, 2, 3], 0);
  console.log(array);
  // -> False

  array = addToZero([1, 2, 3, -2], 0);
  console.log(array);
  // -> True


  console.log("------------------------------");
// 2

  function hasUniqueChars(str) {
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

console.log("------------------------------");
// 3

const isPangram = (str = '') => {
    str = str.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const { length } = str;
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++){
       const el = str[i];
       const index = alphaArr.indexOf(el);
       if(index !== -1){
          alphaArr.splice(index, 1);
       };
    };
    return !alphaArr.length;
 };

 console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

console.log("------------------------------");
// 4

function findLongestWord(string) {
    let str = string;
    let longest = 0;
    let word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word.length;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5

console.log(findLongestWord(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]));
// -> 6

console.log("------------------------------");