
import React from 'react';
import { useState} from 'react';
import DownCounter from './downcounnter';
import UpCounter from './upcounter';
import HoverCounter from './hoverCounter';


function Counter() {
    const [count, setCount] = useState(0);    
    // this function get updated value from child component
    const downCounter = (val) => {
        setCount(val);
    };
   return (
       <div>
        <b>Decrement Counter is : {count}</b>
        <hr/>
        <UpCounter></UpCounter>
        <HoverCounter></HoverCounter>
        <DownCounter DownCounterProps ={downCounter} count = {count}></DownCounter>
     </div>
   );
}
export default Counter;