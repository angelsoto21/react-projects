import { Ganador } from "../constants";

export const checkwinner = (boardToCheck) => {
    for (const combo of Ganador) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  };

export const checkEndGame = (board) => {
    return board.every((square) => square !== null);
  };
