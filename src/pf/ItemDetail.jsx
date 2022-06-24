import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  function onAdd(count) {
    alert("Quiero agregar " + count + " de " + item.name);
  }
  return (
    <>
      <div>{JSON.stringify(item)}</div>
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </>
  );
}
