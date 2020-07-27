export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email:string):string {
    let secretEmail = ""

    for (let i = 0; i < 3; i++) {
        secretEmail += email[i];
    }

    secretEmail += "..."

    const atPosition = email.indexOf('@')

    for (let i = atPosition; i < email.length; i++) {
        secretEmail += email[i];
    }

    return secretEmail
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
