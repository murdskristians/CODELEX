export {};

const count = ( sentence:string, word:string ) => {
    //const newSentence = originalSentence.toLowerCase();

    const pattern = new RegExp('\\b' + word + '\\b', 'ig');
    const wordCount = (sentence.match(pattern) || []).length;
    return wordCount;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
