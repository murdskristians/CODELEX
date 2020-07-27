export {};

/**
 * Complete the function to if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

// You are allowed to edit only this function
function validate(num) {

 for (let i=0 ; i<excludedNums.length ; i++){
   if ( excludedNums[i] === num ) return false
 }

  if ( typeof(num) !== "number" ){
    return false 
  }
  else if ( !isInt(num) ) {
    return false
  }
  return true;
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
