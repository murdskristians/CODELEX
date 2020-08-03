/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number, i:number = 1) {
    //End of recursion
    if (i > n) return;

    //Printing steps
    console.log('#'.repeat(i) + ' '.repeat(n - i));

    //Recursive call
    steps(n, i + 1);
}

export { steps };
