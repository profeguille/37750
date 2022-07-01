import { createContext, useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HOCContext from './pf/HOCContext';
import ItemDetailContainer from './pf/ItemDetailContainer';
import ItemListContainer from './pf/ItemListContainer';
import { myContext } from './pf/HOCContext';

export default function App() {
  let x = 0;
  function holaMundo() {
    alert('hola mundo');
  }
  const { darkMode } = useContext(myContext);

  return (
    <>
      <div style={{ backgroundColor: darkMode ? '#000' : '#fff' }}>
        <BrowserRouter>
          <div>NAVBAR</div>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          </Routes>
          <div>FOOTER</div>
        </BrowserRouter>
      </div>
    </>
  );
}
