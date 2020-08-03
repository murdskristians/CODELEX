/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    var max = Math.max.apply(null, array); // get the max of the array
    array.splice(array.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, array); // get the 2nd max
}

export { secondLargest };
