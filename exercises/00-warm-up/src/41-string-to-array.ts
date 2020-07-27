export {};
const stringToArray = sentence => {
    let newArr = [];

    sentence.forEach(element => {
        newArr.push(element.split(" "))
    });
    return newArr
} 


console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
//Missing task formulation. Wrong function name.
//Function is called string to array, but given parameter - array of one sting: stringToArray(["John Doe"])


