import React, { useState } from 'react';
import Count from './component/Count/Count';

import MultiCount from './component/MultiCount/MultiCount';

export default function App() {
  const [count, setCount] = useState(0);

  const text: string = "Is someone text";
  return (
    <>
      <div className='text-red'>
        <Count text={text} count={count} setCount={setCount} />
        <Count text={text} count={count} setCount={setCount} />
        <Count text={text} count={count} setCount={setCount} />
      </div>

      <hr />

      <div>
        <MultiCount />
        <MultiCount />
        <MultiCount />
      </div>
    </>
  )
}
