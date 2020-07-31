/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    const cleanSen = sen.replace(/[&\/\\#,+()$~%.'":*!?<>{}_]/g, '')
    
    const splitSen = cleanSen.split(/[ -]+/)

    let maxLetters = 0
    let longest = ""

    splitSen.forEach(element => {
        if (element.length > maxLetters) {
            maxLetters = element.length
            longest = element
        }
    });
    return longest
}

export { longestWord };
