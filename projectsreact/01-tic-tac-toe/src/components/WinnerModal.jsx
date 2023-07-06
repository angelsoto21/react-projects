import { Square } from "./Square";

export function WinnerModal({winner, Reiniciar}) {
  if (winner === null) return null;
  const WinnerIs = winner === false ? "Empate" : "Gano:"
  return (
    <section className="winner">
      <div className="text">
        <h2>{WinnerIs}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={Reiniciar}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
