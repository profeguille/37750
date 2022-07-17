import { createContext, useState, useContext } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HOCContext from './pf/HOCContext';
import ItemDetailContainer from './pf/ItemDetailContainer';
import ItemListContainer from './pf/ItemListContainer';
import { myContext } from './pf/HOCContext';
import TestRender from './Components/claseRender/TestRender';
import TestConsulta from './Components/firebase/TestConsulta';
import TestConsColec from './Components/firebase/TestConsColec';
import CheckOut from './pf/CheckOut';

export default function App() {
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

            <Route path="/testconsulta" element={<TestConsulta />} />
            <Route path="/testconsultacoleccion" element={<TestConsColec />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <div>FOOTER</div>
        </BrowserRouter>
      </div>
    </>
  );
}
