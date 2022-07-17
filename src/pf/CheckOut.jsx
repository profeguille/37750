import React, { useState } from 'react';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

export default function CheckOut() {
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [idCompra, setIdCompra] = useState('');

  function handleClickComprar() {
    const pedido = {
      buyer: { nombre: nombre, tel: tel, email: email },
      carrito: [
        { id: 101, title: 'zapato nike', price: 100 },
        { id: 101, title: 'zapato nike', price: 100 },
      ],
      total: 1000,
    };

    if (!nombre || !tel || !email) return;

    //console.log(pedido);
    const db = getFirestore();
    const collectionRef = collection(db, 'pedidos');

    addDoc(collectionRef, pedido).then(({ id }) => setIdCompra(id));
  }

  return (
    <div>
      <p>Su id de comprar es: {idCompra}</p>
      <h1>Complete para terminar su compra</h1>
      <input onChange={(e) => setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></input>
      <br />
      <input onChange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></input>
      <br />
      <input onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'Ingrese email'}></input>
      <br />
      <br />
      <button onClick={handleClickComprar}>Comprar!</button>
    </div>
  );
}
