/**
 * Sort each border of the matrix in a clockwise pattern
 * @param {Array} m - sqaure matrix to sort
 * @returns {Array} - sorted matrix
 */
export function borderSort(m) {
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

  return m;
}
