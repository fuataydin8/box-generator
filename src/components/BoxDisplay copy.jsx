import React, { useState } from 'react';
import styles from './BoxDisplay.module.css';

const BoxDisplay = (props) => {

    // const boxes = [{width: 100, height: 50, background: 'blue'},{width: 50, height: 100, background: 'green'}];
    let boxStyle = {width: 100, height: 50, background: props.box};
    let boxes = [boxStyle]
    // const boxes = ['red','blue']

    return(
        <div className='row'>
        {
            boxes.map((boxStyles, index) => 
            <div style={boxStyles} key={index}>
            </div>
            )
        }
        </div>
    );
}

export default BoxDisplay;