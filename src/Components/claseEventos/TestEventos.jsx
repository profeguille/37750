import React from "react";

export default function TestEventos() {
  /* function handleOnDoubleClick() {
    alert("fue el doble click");
  } */

  function handleOnKeyDown(evt) {
    //console.log(evt);
  }

  function handleOnClick(evt) {
    alert("click en div test eventos");
    evt.stopPropagation();
    console.log(evt);
  }

  console.log(window);

  return (
    <>
      <div
        style={{ border: "1px solid red" }}
        onClick={handleOnClick} /* onDoubleClick={handleOnDoubleClick }*/
      >
        TestEventos
      </div>
      <input onKeyDown={handleOnKeyDown}></input>
    </>
  );
}
