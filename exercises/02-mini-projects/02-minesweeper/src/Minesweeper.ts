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

  constructor(level: Level) {
    this.level = level;
  }

  columnsCount(): number {
    return 10;
  }

  getCells(): Cell[][] {
    if ( this.level.title === "Beginner" ) return (Array(10).fill( Array(10).fill( new Cell() )))
    if ( this.level.title === "Intermediate" ) return (Array(25).fill( Array(25).fill( new Cell() )))
    else return (Array(100).fill( Array(100).fill( new Cell() )))
  }
  
 
  onLeftMouseDown(x: number, y: number) {}

  onLeftMouseUp(x: number, y: number) {}

  onRightMouseUp(x: number, y: number) {}

  isTense(): boolean {
    return true;
  }

  timePassed(): number {
    return 999;
  }

  minesLeftCount() {
    return 999;
  }

  reset() {}

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {}

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
