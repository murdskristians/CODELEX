export {};

function truncateString( word:string, charCount){

    let result:string = ""

    for ( let i=0 ; i<charCount ; i++ ){
        result+=word[i];
    }

    return result
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
