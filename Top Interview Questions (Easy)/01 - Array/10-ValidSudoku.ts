function isValidSudoku(board: string[][]): boolean {
  let result = false;

  let validRows = true;
  let validColumns = true;
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let row = board[x];
      let numbers = row.filter((n) => n.match(/\d/));
      if (containsDuplicates(numbers)) validRows = false;

      for let (x = 0; x < 0; x++) {
        let column = y
        let numbers: number[] = [];

      }
    }
  }

  return validRows && validColumns;
}

function containsDuplicates(arr: any[]): boolean {
  return arr.length !== new Set(arr).size;
}

// test
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
