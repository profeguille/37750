import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useState } from 'react';

export default function TestConsColec() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    //TRAER TODA LA COLECCION
    //const collectionRef = collection(db, 'productos');

    //TRAER LA COLECCION CON UN FILTRO
    const collectionRef = query(collection(db, 'productos'), where('categoria', '==', 'fiesta'));

    getDocs(collectionRef).then((res) => {
      const auxArray = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setItems(auxArray);
      //console.log(auxArray);
      //setItem({ ...res.data(), id: res.id });
    });
  }, []);

  return <div>{items && <>{JSON.stringify(items)}</>}</div>;
}
