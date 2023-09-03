import React, { useState } from 'react';
import styles from './BoxDisplay.module.css';

const BoxDisplay = (props) => {
    const { boxSpecsList } = props; // props must be destructured to get the value, doesn't work otherwise
    console.table(boxSpecsList)
    return(
        <div className='row'>
        {
            boxSpecsList.map((boxStyles, index) => 
            <div style={boxStyles} key={index}>
            </div>
            )
        }
        </div>
    );
}

export default BoxDisplay;