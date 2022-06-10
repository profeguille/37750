//@ts-check
import logo from "./logo.svg";
import "./App.css";
import Test from "./Components/Test";
import TestFuncion from "./Components/TestFuncion";
import AlumnoContainer from "./Components/AlumnoContainer";
import HOC from "./Components/HOC";
import HOCColor from "./Components/HOCColor";
import CallToActionWithVideo from "./Components/CallToActionWithVideo";
import WithAction from "./Components/withAction";

function App() {
  let decir = "APP ABUELO QUIERE DECIR ALGO";

  function alertHolaMundo() {
    alert("hola mundo");
  }

  return (
    <>
      <WithAction />
      <CallToActionWithVideo />
      {/* {decir}
      <Test msg="juan" msg2="juan" />
      <Test msg="sofia" msg2="juan" />
      <Test msg="mario" msg2="juan" />
      <br />
      <br />
      <TestFuncion alertHolaMundo={alertHolaMundo} /> */}
      {/* <AlumnoContainer /> */}
      {/* <HOC>
        <>
          <TestFuncion alertHolaMundo={alertHolaMundo} />
          <Test msg="juan" msg2="juan" />
          <Test msg="sofia" msg2="juan" />
          <Test msg="mario" msg2="juan" />
        </>
      </HOC> */}
      {/*  <HOCColor>
        <Test msg="mario" msg2="juan" />
      </HOCColor>
      <Test msg="mario" msg2="juan" />
      <Test msg="mario" msg2="juan" />
      <Test msg="mario" msg2="juan" />
      <Test msg="mario" msg2="juan" />
      <HOCColor>
        <br />
      </HOCColor> */}
    </>
  );
}

export default App;
