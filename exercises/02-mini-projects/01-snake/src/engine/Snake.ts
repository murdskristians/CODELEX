import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";
  growCalls: number = 0;

  setDirection( direction: Direction ) {
    if ( this.direction === 'Right' && direction === 'Left' ) return
    if ( this.direction === 'Up' && direction === 'Down' ) return
    if ( this.direction === 'Left' && direction === 'Right' ) return
    if ( this.direction === 'Down' && direction === 'Up' ) return
    this.direction = direction;
  }

  move() {
    this.tail.shift();
    this.tail.push(this.head); 

    if ( this.direction === "Right" ) {
      this.head = new Cell( this.head.x + 1, this.head.y );
    } else if ( this.direction === "Down" ) {
      this.head = new Cell( this.head.x, this.head.y + 1);
    } else if ( this.direction === "Up" ) {
      this.head = new Cell( this.head.x, this.head.y - 1);
    } else this.head = new Cell( this.head.x - 1, this.head.y);
  }

  grow() {
    this.growCalls += 3;
    this.tail.unshift(this.head)
    this.tail.unshift(this.head)
    this.tail.unshift(this.head)
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }
}
