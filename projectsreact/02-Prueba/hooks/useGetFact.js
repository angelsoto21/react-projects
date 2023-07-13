import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatsFacts() {
    const [fact, setFact] = useState();
  
    //para cargar el fact
    /*const adi = async () => {
      const angel = await getRandomFact();
      setFact(angel);
    };*/
    const adi = () => {
      getRandomFact().then((facts) => setFact(facts))
    }
    useEffect(adi, []);
  
    return {fact, adi}
  }