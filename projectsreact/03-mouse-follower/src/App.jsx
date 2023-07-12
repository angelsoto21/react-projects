import { useEffect, useState } from "react";

function App() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({x: 0, y:0})
  useEffect(() => {
    console.log("efecto", { enable });
    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('HandleMove' , {clientX,clientY})
      setPosition({x: clientX, y: clientY})
    }
    if(enable) {
      window.addEventListener('pointermove', handleMove)
    }
    // cleanup
    //cuando el componente ya no se ejecuta o se ejecuta (App)
    //Cuando cambian las dependencias, antes de ejecutar
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable]);
  // [] -> solo se ejecuta una vez cuando se monta el componente
  //[enable] -> se ejecuta cuando cambia enable y cuando se monta el componente
  // undefined -> se ejecuta cada vez que renderiza el componente
  return (  
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`
        }}
      />
      <h3>proyecto 3</h3>
      <button
        onClick={() => {
          setEnable(!enable);
        }}
      >
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
