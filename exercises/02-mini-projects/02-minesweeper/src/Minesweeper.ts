import { Level } from "./levels";

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
}

export class Minesweeper {
  private level: Level;
  minesFound: number = 0;

  constructor(level: Level) {
    this.level = level;
  }

  


  columnsCount(): number {
    return this.level.columns;
  }

  getCells(): Cell[][] {
    return Array(this.level.columns).fill( Array(this.level.columns).fill( new Cell() ))
  }
  
 
  onLeftMouseDown(x: number, y: number) {}

  onLeftMouseUp(x: number, y: number) {}

  onRightMouseUp(x: number, y: number) {}

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
