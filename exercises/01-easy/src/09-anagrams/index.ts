/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    var y = stringA.replace(/[&\/\\#,+()$~%.'":*?!<>{}_]/g, '').toLocaleLowerCase().split("").sort().join(""),
        z = stringB.replace(/[&\/\\#,+()$~%.'":*?!<>{}_]/g, '').toLocaleLowerCase().split("").sort().join("");
    
    return z === y ? true : false
}

export { anagrams };
