import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  apples: Cell[] = [
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22),
    new Cell(41, 22)
  ];

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {}

  isAppleInside(cell: Cell): boolean {
    return this.apples.find( el => el.x === cell.x && el.y === cell.y ) !== undefined;
  }

  removeApple(cell: Cell): void {}

  isDone(): boolean {
    return false;
  }

  getApples(): Cell[] {
    return this.apples
  }
}
