import React from "react";

export default function Cats({ cat }) {
  return (
    <>
      {cat.fact && (
        <>
          <p>HECHO: {cat.fact}</p>
          <p>LARGO: {cat.length}</p>
        </>
      )}
    </>
  );
}
