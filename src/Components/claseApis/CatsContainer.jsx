import React, { useEffect } from "react";
import { useState } from "react";
import Cats from "./Cats";

let arrayhardoce = [
  { id: 0, name: "guille", edad: 40 },
  { id: 0, name: "guille", edad: 40 },
];

export default function CatsContainer() {
  const [cat, setCat] = useState({});
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => console.log(response))
      .then((data) => {
        console.log(data);
        setCat(data);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        //no hacer nada
      });
  }, []);

  return <>{cat.fact && <Cats cat={cat} />}</>;
}
