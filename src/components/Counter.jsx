import React, { useState } from 'react';

export default function Counter({onClick}) {
  const [count, setCount] = useState(0);
  return (
    <div className="countwrap">
      <p className="count">{count}</p>
      <button className="countbutton" onClick={() => {setCount(prev => prev +1);
      onClick()}}
      > 투표하기 </button>
    </div>
  );
}

