import React from 'react';
import { useState} from 'react';

function HoverCounter () {
    const [count, setCount] = useState(0);

    const upCounter = () =>{
        console.log('upcounter');
        setCount(count +1);
    }
    

    return (
    <button className="inc" onMouseOver={upCounter}>Hover Over Counter {count}</button>
    );
}

export default HoverCounter;