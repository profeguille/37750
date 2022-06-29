//@ts-check
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./pf/ItemDetailContainer";
import ItemListContainer from "./pf/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>NAVBAR</div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
        <div>FOOTER</div>
      </BrowserRouter>
    </>
  );
}

export default App;
