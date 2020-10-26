import React from 'react';
import HocOriginal from './hoc-original';

function HocUpCounter (props) {
    return (
        <div>
            <button className="inc" onClick={props.updateCounter}> Increment Counter {props.count}</button>
        </div>

    );
}

export default HocOriginal(HocUpCounter);