import { useState, useEffect } from "react";

const PREFIX_URL_IMG_CAT = "https://cataas.com/";

export function useGetImage ({ fact }) {
    const [firstword, setFirstword] = useState();
  
    useEffect(() => {
      if (!fact) return;
      const firstWord = fact.split(" ", 3).join(" ");
      fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
        .then((res2) => res2.json())
        .then((data2) => {
          const { url } = data2;
          setFirstword(url);
        });
    }, [fact]);
  
    return {firstword: `${PREFIX_URL_IMG_CAT}${firstword}`, firstprefix: firstword}
  
  }