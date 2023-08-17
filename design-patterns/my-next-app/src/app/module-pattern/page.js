"use client";
import { useEffect } from "react";
import {
  add as addValues,
  multiply as multiplyValues,
  subtract,
  square,
} from "./math.js";

const ModulePattern = () => {
  function add(...args) {
    return args.reduce((acc, cur) => cur + acc);
  }

  function multiply(...args) {
    return args.reduce((acc, cur) => cur * acc);
  }

  const fromMathJS = () => {
    console.log(addValues(7, 8));
    console.log(multiplyValues(8, 9));
    console.log(subtract(10, 3));
    console.log(square(3));
  };

  const fromIndexJS = () => {
    console.log(add(8, 9, 2, 10));
    console.log(multiply(8, 9, 2, 10));
  };
  return (
    <>
      <h2>Module Pattern</h2>

      <ul className="my-2">
        <li>
          The module pattern allows you to split up your code into smaller,
          reusable pieces.
        </li>
        <li>
          Besides being able to split your code into smaller reusable pieces,
          modules allow you to keep certain values within your file private.
          Declarations within a module are scoped (encapsulated) to that module
          , by default.
        </li>
      </ul>

      <button id="blue" onClick={fromMathJS}>
        {" "}
        Using Math.js Function
      </button>

      <button id="blue" onClick={fromIndexJS}>
        {" "}
        Using Index.js Function
      </button>
    </>
  );
};

export default ModulePattern;
