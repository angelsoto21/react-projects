export const getRandomFact = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    const { fact } = data;
    return fact;
  }

  /* return fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => fact) {
        const { fact } = data;
        return fact
      }) */

      /*
const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    const { fact } = data;
    const data2 = fact;
    return console.log(data2);
      */