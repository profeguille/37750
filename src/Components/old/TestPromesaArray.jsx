/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import TestPromesaArrayLayout from "./TestPromesaArrayLayout";

export default function TestPromesaArray() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  let pago;

  useEffect(() => {
    pago = new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          res([
            { id: 1, name: "zapato nike", price: 100 },
            //<div> id 1 nombre zapato y el precio es: 100</div>
            { id: 2, name: "zapato adidas", price: 200 },
            { id: 3, name: "zapato carters", price: 300 },
          ]);
        } else {
          rej("No tengo productos!!");
        }
      }, 2000);
    });

    pago
      .then((resultado) => {
        setProductos(resultado);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      onClick={() => {
        console.log(pago);
      }}
    >
      {loading && "Loading..."}
      {error && "ERROR: No te quedes esperando porque."}
      {productos && <TestPromesaArrayLayout productos={productos} />}
    </div>
  );
}
