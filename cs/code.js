let sum = 0
function addToZero([]) {
for (let i = 0; i < Array.length; i++) {
    sum += Array[i];
}; if(addToZero = 0 === true)
    return true;
    else return false;
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True