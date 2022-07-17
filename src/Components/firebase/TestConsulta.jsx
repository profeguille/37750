//@ts-check
import React, { useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

export default function TestConsulta() {
  const [item, setItem] = useState({});
  useEffect(() => {
    const db = getFirestore();
    const adidasRef = doc(db, 'productos', 'H2CjknQXNROxgrX8Bf62');
    getDoc(adidasRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, []);

  return <div>{item && <>{JSON.stringify(item)}</>}</div>;
}
