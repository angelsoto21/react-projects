import { useGetImage } from "../hooks/usegetImage";
import { useCatsFacts } from "../hooks/useGetFact";
import { Otro } from "../components/otro";

export function App() {
  const { fact, adi } = useCatsFacts();
  const { firstword, firstprefix } = useGetImage({ fact });

  const HandleClick = async () => {
    adi();
  };

  return (
    <main>
      <button onClick={HandleClick}>Generar nuevo fact</button>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {firstprefix && (
        <img
          src={firstword}
          alt={`imagen de un gatito con la primera palabra la cual es ${firstword}`}
        />
      )}
      <Otro/>
    </main>
  );
}
