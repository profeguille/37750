//@ts-check
import React from "react";
import HijoDeTest from "./HijoDeTest";

export default function Test({ msg, msg2 }) {
  //const objeto = { id: 100, name: "rolando" };
  return (
    <div style={{ backgroundColor: "gray", marginBottom: "50px" }}>
      {msg + " " + msg2}
      <HijoDeTest saludo={"Hola"} />
      <HijoDeTest saludo={"Hello"} />
    </div>
  );
}
