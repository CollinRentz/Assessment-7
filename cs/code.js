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
