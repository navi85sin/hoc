import React, { Fragment } from 'react';
import HocUpCounter from './hocupcounter';
import HocHover from './hochover';

const HocCounter = props => {
    return (
        <Fragment>
        <h3>here is the HOC </h3>
        <HocUpCounter></HocUpCounter>
        <HocHover></HocHover>
        </Fragment>
    )
}

export default HocCounter;