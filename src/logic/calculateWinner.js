export default function calculateWinner(ships, squares) {
  return ships.every((cell, i) => {
    if (cell === null)
      return squares[i] === 'O' || squares[i] === null;
    else
      return squares[i] === 'X';
  });
}
