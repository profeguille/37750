import React from "react";

export default function AlumnoPresentacion({ item }) {
  return (
    <div>
      te muestro un alumno
      <br />
      <p>nombre: {item.nombre}</p>
      <br />
      <p>apellido: {item.apellido}</p>
      <br />
      <p>edad: {item.edad}</p>
    </div>
  );
}
