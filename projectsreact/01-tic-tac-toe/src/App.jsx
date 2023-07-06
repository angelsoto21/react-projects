import { useState } from "react";
import { Square } from "./components/Square";
import { Turns } from "./constants";
import { WinnerModal } from "./components/WinnerModal";
import { checkwinner, checkEndGame } from "./logic/board";

function App() {
  const [board, setBoard] = useState(() => {
    const BoardFromStorage = window.localStorage.getItem("board");
    return BoardFromStorage
      ? JSON.parse(BoardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem("turn");
    return turnFormStorage ? turnFormStorage : Turns.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    //para no sobre escribir
    if (board[index] || winner) return;

    //actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);
    //Guardar aqui partido
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //revisar si hay ganador
    // para hacer un console log no puedes poner el estado debes de poner el newWinner en vez del Winner
    const newWinner = checkwinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const Reiniciar = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWinner(null);
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn') 
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={Reiniciar}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>

      <WinnerModal winner={winner} Reiniciar={Reiniciar} />
    </main>
  );
}

export default App;
