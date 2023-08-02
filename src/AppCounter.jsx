import React, { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {setCount(prev => prev +1);}
  return (
    <div className="countercontainer">
      <Counter onClick={handleCount}/>
      <div className="total">
        총 투표수
        <p className="totalcount">{count}</p>
      </div>
      <Counter onClick={handleCount}/>
    </div>
  );
}
