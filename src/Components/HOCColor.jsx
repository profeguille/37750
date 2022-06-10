import React from "react";
import Test from "./Test";
import TestFuncion from "./TestFuncion";
import { Spinner } from "@chakra-ui/react";
export default function HOCColor({ children }) {
  return (
    <>
      <Spinner />
      <div style={{ border: "5px solid red" }}>{children} </div>
    </>
  );
}
