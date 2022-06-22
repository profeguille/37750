//@ts-check
import "./App.css";
import CatsContainer from "./Components/claseApis/CatsContainer";

function App() {
  let decir = "APP ABUELO QUIERE DECIR ALGO";

  function alertHolaMundo() {
    alert("hola mundo");
  }

  let miProd = { id: 0, name: "zapato nike", price: 100 };
  let maxStok = 100;
  return (
    <>
      <CatsContainer />
    </>
  );
}

export default App;
