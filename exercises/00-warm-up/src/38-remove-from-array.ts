export {};

const removeFromArray = (arr, ...numForRemove) => {
    
    for (let num of numForRemove){
        const index = arr.indexOf(num);
        if (index > -1) arr.splice(index, 1);
    } 

    return arr
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]  
