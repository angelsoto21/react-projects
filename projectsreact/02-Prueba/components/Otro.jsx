import { useGetImage } from "../hooks/usegetImage";

export function Otro() {
  const { firstword, firstprefix } = useGetImage({ fact: "hola soy angel" });
  return (
    <>
      {firstprefix && (
        <img src={firstword} alt="esta es la imagen del primer gato" />
      )}
    </>
  );
}
