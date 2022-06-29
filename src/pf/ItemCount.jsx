import { useState } from "react";
export default function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div style={{ border: "3px solid red" }}>
        BOTONERA ITEMCOUNT
        <button onClick={remove}>-</button>
        <p>{count}</p>
        <button onClick={add}>+</button>
        <br />
        <button onClick={() => onAdd(count)}>AGREGAR AL CARRO</button>
      </div>
    </>
  );
}
