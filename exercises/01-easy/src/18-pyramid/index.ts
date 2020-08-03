/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number, row:number = 0, level = ''):void {
    //Finish recursive call
    if (row === n) return;

    if (level.length === 2 * n - 1) {
      //printing next line
      console.log(level);
      return pyramid(n, row + 1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
    } else {
      add = ' ';
    }
    pyramid(n, row, level + add);
}

export { pyramid };
