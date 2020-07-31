/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    const cleanStr = input.replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g, '')
    
    const splitStr = cleanStr.split(/[ -]+/)
    
    let newStr = ""
    
    splitStr.forEach(element => {
        newStr += element[0]
    });

    return newStr.toUpperCase()
}

export { parse };
