import React from 'react';


const DownOnClick = (props) => {
    console.log(props);
    const count = props.count + 1;
    // this call the parent component function and pass the value to it.
    props.DownCounterProps(count);
}
function DownCounter (props) {

    
    return (
    <button className="dec" onClick={() => DownOnClick(props)}> Decrement Counter {props.count}</button>
    );
}

export default DownCounter;