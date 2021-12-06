// use union types to be more flexible with your functions
// run time type chekcer

function combine(
  input1: string | number, 
  input2: string | number, 
  resultConversion: 'as-number' | 'as-text'
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number'){
  //   return +result;
  // } else {
  //   return result.toString()
  // }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);