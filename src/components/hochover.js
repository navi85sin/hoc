import React, { Fragment } from 'react';

import HocOriginal from './hoc-original';

function HocHover (props) {
    return (
        <Fragment>
            <button className="inc" onMouseOver={props.updateCounter}> Increment Counter {props.count}</button>
        </Fragment>

    );
}

export default HocOriginal(HocHover);