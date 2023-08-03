'use client';
import Counter from "./counter";

export default function BlueButton() {
  const btnClicked=()=>{
    Counter.increment();
    console.log("Counter total: ", Counter.getCount());
  }
  return (
    <button id="blue" onClick={btnClicked}>Blue Button</button>
  )
}

