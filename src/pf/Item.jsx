import React from "react";

export default function Item({ item }) {
  return (
    <>
      <div>{JSON.stringify(item)}</div>
      <button>VER DETALLE</button>
    </>
  );
}
