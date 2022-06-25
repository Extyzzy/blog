import React from "react";

type CountProps = {
  text: string;
  count: number;
  setCount: Function;
}


// Is the same 
// interface CountProps  {
//   text: string;
//   count: number;
//   setCount: Function;
// }


export default function Count({ text, count, setCount }: CountProps) {
  return (
    <div className="container mx-auto my-12 bg-green h-24 border-3">
      {text}
      <div>
        Our count is equal = {count}
      </div>
      <div onClick={() => setCount(count + 1)}>
        Set + 1 COUNT
      </div>
      <div onClick={() => setCount(count - 1)}>
        Set - 1 COUNT
      </div>
    </div>
  )
}