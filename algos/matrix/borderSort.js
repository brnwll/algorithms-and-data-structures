/**
 * Sort each border of the matrix in a clockwise pattern
 * @param {Array} m - sqaure matrix to sort
 */
function borderSort(m) {
  // validate input
  for (let row of m) {
    if (!Array.isArray(row))
      throw new Error("Matrix must be an array of arrays");
    if (row.length !== m.length) throw new Error("Matrix must be square");
  }

  // initial window is the whole matrix
  let wSize = m.length;
  let wStartRow = 0;
  let wStartCol = 0;

  while (wSize >= 1) {
    let borderElements = [];
    const getBorderElement = (row, col) => borderElements.push(m[row][col]);
    traverseBorder(wStartRow, wStartCol, wSize, getBorderElement);
    borderElements.sort((a, b) => a - b);
    const setBorderElement = (row, col) =>
      (m[row][col] = borderElements.shift());
    traverseBorder(wStartRow, wStartCol, wSize, setBorderElement);
    // setup next window
    wStartRow++;
    wStartCol++;
    wSize -= 2;
  }

  function traverseBorder(row, col, size, cb) {
    const startRow = row;
    const endRow = row + size - 1;
    const startCol = col;
    const endCol = col + size - 1;
    // traverse first row forward
    for (col; col <= endCol; col++) cb(row, col);
    col--;
    // descend right column (skipping first and last)
    for (row; row <= endRow; row++)
      if (row !== startRow && row !== endRow) cb(row, col);
    row--;
    // traverse last row in reverse
    for (col; col >= startCol; col--) cb(row, col);
    col++;
    // ascend the first column (skipping first and last)
    for (row; row >= startRow; row--)
      if (row !== startRow && row !== endRow) cb(row, col);
  }
}

// Test data
let m = [
  [5, 8, -2, 8, 100, 200],
  [7, -12, 55, 7, 300, 400],
  [1, 2, 3, 4, 500, 600],
  [-1, 2, 3, 7, 700, 800],
  [10, 20, 30, 70, 7000, 8000],
  [-10, 25, 35, 75, 7005, 8005],
];
console.table(m);
borderSort(m);
console.table(m);
