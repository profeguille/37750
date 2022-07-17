import { useContext } from 'react';
import { useState } from 'react';
import { myContext } from './HOCContext';

export default function Item({ item }) {
  const { darkMode, setDarkMode } = useContext(myContext);
  console.log('render item');
  return (
    <div>
      <div>{JSON.stringify(item)}</div>
      <button>VER DETALLE</button>
      <button onClick={() => setDarkMode(!darkMode)}>cambiar dark mode</button>
    </div>
  );
}
