import React from "react";

export default function TestPromesaArrayLayout({ productos }) {
  return (
    <div>
      {productos.map((producto, i) => {
        return (
          <div key={i}>
            <h1>{producto.name}</h1>
            <div>
              <p>
                id {producto.id} nombre {producto.name} y el precio es:
                {producto.price}
              </p>
              <br />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}
