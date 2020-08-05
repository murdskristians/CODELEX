import { Minesweeper } from "./Minesweeper";
import { LEVELS } from "./levels";

describe("Minesweeper", () => {
  
  it("should have field with closed cells", () => {
    const level = LEVELS[0];
    const minesweeper = new Minesweeper(level);
    
    const cells = minesweeper.getCells();
    
    expect(cells.length).toBe(10);
    cells.forEach(row => expect(row.length).toBe(10));
  });
  it("should show 25x25 field on Intermediate level", () => {
    const level = LEVELS[1];
    const minesweeper = new Minesweeper(level);

    const cells = minesweeper.getCells();

    expect(cells.length).toBe(25);
    cells.forEach(row => expect(row.length).toBe(25));
  });
  it("should show 100x100 field on Expert level", () => {
    const level = LEVELS[2];
    const minesweeper = new Minesweeper(level);

    const cells = minesweeper.getCells();

    expect(cells.length).toBe(100);
    cells.forEach(row => expect(row.length).toBe(100));
  });
});
