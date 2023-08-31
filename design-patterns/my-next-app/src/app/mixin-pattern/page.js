"use client";
import { useEffect } from "react";

const MixinPattern = () => {
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
  };

  const dogFunctionality = {
    __proto__: animalFunctionality,
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    walk() {
      super.walk();
    },
    sleep() {
      super.sleep();
    },
  };

  Object.assign(Dog.prototype, dogFunctionality);

  const pet1 = new Dog("Daisy");

  return (
    <>
      <h2>Mixin Pattern</h2>
      <ul className="my-2">
        <li>
          A mixin is an object that we can use in order to add reusable
          functionality to another object or class, without using inheritance.
        </li>
        <li>
          We can add the functionality mixin to the Dog prototype with the{" "}
          <strong>Object.assign method</strong>.
        </li>
      </ul>

      <div>
        <button className="m-2 border-r-2" onClick={() => pet1.sleep()}>Sleep</button>
        <button className="m-2 border-r-2" onClick={() => pet1.walk()}>Walk</button>
        <button className="m-2 border-r-2" onClick={() => pet1.play()}>Play</button>
      </div>
    </>
  );
};
export default MixinPattern;
