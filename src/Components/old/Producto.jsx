import React, { useState, useEffect } from "react";

export default function Producto({ miProd, maxStok, alertHolaMundo }) {
  console.log("render");

  //DECLARO UNA VARIABLE EN JS
  //let auxStock = maxStok;
  //DECLARO UN ESTADO EN REACT
  const [auxStock, setAuxStock] = useState(maxStok);

  //INCIO: CUANDO SE MONTA
  useEffect(() => {
    let arg = true;
    if (arg) {
      setAuxStock(maxStok + 200);
    }
  }, []);

  //RENDERS O CAMBIOS: LIMITADOS AL PARAMETRO DEL ARRAY DE DEPENDECIAS
  useEffect(() => {
    if (auxStock == 305) {
      alert("OJO QUE ESTAS CAMBIANDO EL STOCK A MAS DE 305!!!");
    }
  }, [auxStock]);

  //FIN: CUANDO SE DESMONTA
  useEffect(() => {
    return () => {
      alert("ME ESTOY DESMONTANDO");
    };
  }, []);

  function aumentarStok() {
    setAuxStock(auxStock + 1);
    //alert(auxStock);
  }

  return (
    <div>
      Producto: {JSON.stringify(miProd)}
      <p>MAXIMO STOCK PERMITIDO: {auxStock}</p>
      <div
        onClick={() => aumentarStok()}
        style={{ border: "1px solid red", width: "200px" }}
      >
        sumar +1 stock maximo{" "}
      </div>
    </div>
  );
}
