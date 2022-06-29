import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  let { idItem } = useParams();

  useEffect(() => {
    const mock = [
      { id: 101, name: "zapato nike", stock: 20, price: 100, category: "nike" },
      { id: 102, name: "pelota nike", stock: 10, price: 20, category: "nike" },
      {
        id: 103,
        name: "zapato adidas",
        stock: 5,
        price: 170,
        category: "adidas",
      },
    ];

    //ESTA LA PROMESA
    //res({ id: 101, name: "zapato nike", stock: 20, price: 100, category: "nike" })
    let res = mock.find((item) => item.id == idItem);
    setItem(res);
  }, [idItem]);

  return (
    <>
      <div>
        <ItemDetail item={item} />
      </div>
    </>
  );
}
