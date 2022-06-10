import React from "react";
import AlumnoPresentacion from "./AlumnoPresentacion";

export default function AlumnoContainer() {
  //genera los datos y puede fallar
  let alumno = { nombre: "juan maria", edad: 40, apellido: "franco" };
  return <AlumnoPresentacion item={alumno} />;
}
