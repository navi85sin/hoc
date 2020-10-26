import React from 'react';
import { useState} from 'react';

function UpCounter (props) {

    const [count, setCount] = useState(0);

    const upCounter = () =>{
        console.log('upcounter');
        setCount(count +1);
    }
    return (
    <button className="inc" onClick={upCounter}>Increment Counter {count}</button>
    );
}

export default UpCounter;