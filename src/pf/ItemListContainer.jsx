import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  let { idCategory } = useParams();

  useEffect(() => {
    const mock = [
      { id: 101, name: 'zapato nike', stock: 20, price: 100, category: 'nike' },
      { id: 102, name: 'pelota nike', stock: 10, price: 20, category: 'nike' },
      {
        id: 103,
        name: 'zapato adidas',
        stock: 5,
        price: 170,
        category: 'adidas',
      },
    ];

    //let idCategory = "nike";

    console.log(idCategory);
    if (!idCategory) {
      setItems(mock);
    } else {
      let arrayFiltrado = mock.filter((item) => item.category === idCategory);
      setItems(arrayFiltrado);
    }
  }, [idCategory]);

  return (
    <>
      <p>
        <Link to={'/category/nike'}>NIKE</Link>
      </p>
      <p>
        <Link to={'/category/adidas'}>ADIDAS</Link>
      </p>
      <div>
        <ItemList items={items} />
      </div>
    </>
  );
}
