'use client';
import Counter from "./counter";

export default function RedButton() {
  const btnClicked=()=>{
    Counter.increment();
    console.log("Counter total: ", Counter.getCount());
  }
  return (
    <button id="red" onClick={btnClicked}>Red Button</button>
  )
}
