/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function TestPromesa() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState({});

  let pago;

  useEffect(() => {
    pago = new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          res({ id: 1, name: "zapato nike", price: 200 });
        } else {
          rej("No tengo producto!!");
        }
      }, 2000);
    });

    pago
      .then((resultado) => {
        setProducto(resultado);
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
      {producto && <div>{JSON.stringify(producto)}</div>}
    </div>
  );
}
