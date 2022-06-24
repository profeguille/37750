//@ts-check
import "./App.css";
import CatsContainer from "./Components/claseApis/CatsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pf/ItemListContainer";
import ItemDetailContainer from "./pf/ItemDetailContainer";

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
