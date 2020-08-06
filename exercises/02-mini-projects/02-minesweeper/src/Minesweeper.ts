import { Level } from "./levels";

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;

  constructor( isOpen = false, mines = 0, isBomb = false, isFlag = false, isUnsure = false) {
    this.isOpen = isOpen;
    this.mines = mines;
    this.isBomb = isBomb;
    this.isFlag = isFlag;
    this.isUnsure = isUnsure;
  }
}

export class Minesweeper {
  private level: Level;
  minesFound: number = 0;
  columns: number = 10;
  cells:Cell[][];

  constructor(level: Level) {
    this.level = level;
    this.cells = this.getCells()

    //PLANTING BOMBS ALSO DOES NOT WORK!
    // let bombs = level.mines;
    // while (bombs > 0) {

    //   const x = Math.floor(Math.random() * level.rows);
    //   const y = Math.floor(Math.random() * level.columns);

    //   if ( this.cells[x][y].isBomb != true ) {
    //     this.cells[x][y].isBomb = true;
    //     bombs--; 
    //     console.log("positioned mine at [" + x + "], [" + y + "], yet to go " + bombs);
    //   }
    // }
  }

  columnsCount(): number {
    this.columns = this.level.columns
    return this.level.columns;
  }

  getCells(): Cell[][] {
    this.cells = Array(this.level.columns).fill( Array(this.level.columns).fill( new Cell() ))
    return this.cells
  }
  
  onLeftMouseDown(x: number, y: number) {
    //Next line is not working
    this.cells[x][y] = new Cell( true, 0, true, true, true ) 
  }

  onLeftMouseUp(x: number, y: number) {}

  onRightMouseUp(x: number, y: number) {
    this.cells[x][y].isFlag = true;
  }

  isTense(): boolean {
    return true;
  }

  timePassed(): number {

    let mins = 1;
    let now = new Date().getTime();
    let deadline = mins * 60 * 1000 + now;
   
    return setInterval( () => {
      var currentTime = new Date().getTime();
      var distance = deadline - currentTime;
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(seconds)
      return seconds;
    }, 500)
  }

  minesLeftCount() {
    return this.level.mines - this.minesFound;
  }

  reset() {}

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {
    this.level = level;
  }

  isLost(): boolean {
    return false;
  }

  isWon(): boolean {
    return false;
  }

  isQuestionMarksEnabled(): boolean {
    return false;
  }

  toggleQuestionMarksEnabled() {}
}
