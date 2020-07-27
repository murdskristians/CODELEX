export {};

const repeatString = ( letter:string, repeatTimes:number ) :string => {
    let newWord = ""

    for (let i = 0; i < repeatTimes; i++) {
        newWord += letter;
    }

    return newWord
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
