export function a1ToIndex(a1, nc) {
  if (/[a-z]/i.test(a1[0]) && /[0-9]+/.test(a1.slice(1))) {
    let row = parseInt(a1[1]) - 1
    let col = a1.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
    let numCols = nc || window.CONSTS ? window.CONSTS.NUM_COLS : 7;
    return row * numCols + col;
  } else {
    return -1;
  }
}

export function indexToA1(ind, nc) {
  let numCols = nc || window.CONSTS ? window.CONSTS.NUM_COLS : 7;
  let row = Math.floor(ind / numCols);
  let col = ind % numCols;
  return `${String.fromCharCode('A'.charCodeAt(0) + col)}${row + 1}`;
}
