export {};

function draw(lastLine:number) {
    //this tells how many lines
    for (let i = 0; i < lastLine; i++) {
        let line = ""

        //makes line from stars that will be drawn
        for (let k = 0; k <= i; k++) {
            line = line + "*"
        }
        console.log(line);
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
