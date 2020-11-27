const grids = [
  { x: 0, y: 0 },
  { x: 3, y: 0 },
  { x: 6, y: 0 },
  { x: 0, y: 3 },
  { x: 3, y: 3 },
  { x: 6, y: 3 },
  { x: 0, y: 6 },
  { x: 3, y: 6 },
  { x: 6, y: 6 },
];

function isValidSudoku(board: string[][]): boolean {
  const sanitizedRows = board.map((row) => row.filter((item) => item !== '.'));
  const sanitizedColumns = [];

  for (let y = 0; y < 9; y++) {
    const column = [];
    for (let x = 0; x < 9; x++) {
      const item = board[x][y];
      if (item !== '.') column.push(board[x][y]);
    }
    sanitizedColumns.push(column);
  }

  let validRows = true;
  for (let row of sanitizedRows) {
    if (containsDuplicates(row)) validRows = false;
  }

  let validCols = true;
  for (let col of sanitizedColumns) {
    if (containsDuplicates(col)) validCols = false;
  }

  let validGrids = true;
  for (let grid of grids) {
    if (containsDuplicates(sanitizedGrid(board, grid.x, grid.y))) {
      validGrids = false;
    }
  }

  return validRows && validCols && validGrids;
}

function sanitizedGrid(board: string[][], x: number, y: number) {
  let numbers = [];
  for (let _y = y; _y < y + 3; _y++) {
    for (let _x = x; _x < x + 3; _x++) {
      numbers.push(board[_x][_y]);
    }
  }
  const sanitized = numbers.filter((item) => item !== '.');
  console.log(sanitized);
  return sanitized;
}

function containsDuplicates(arr: any[]): boolean {
  return arr.length !== new Set(arr).size;
}

// test
console.log(
  isValidSudoku([
    ['1', '2', '.', '.', '.', '.', '6', '.', '7'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '5'],
    ['.', '.', '9', '.', '6', '.', '4', '.', '.'],
    ['.', '6', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '4', '.', '.', '7', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '2'],
    ['.', '9', '.', '.', '.', '.', '.', '.', '7'],
  ])
);
