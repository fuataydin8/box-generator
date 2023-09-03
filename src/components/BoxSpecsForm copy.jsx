import React, { useState } from 'react';


const BoxSpecsForm = (props) => {
    const [boxColor, setBoxColor] = useState("");

    const handleSpecsSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(boxColor)
        // const boxesArray = [{width: 100, height: 100, background: {boxColor} }];
        // const newBox = {boxColor};
        console.log ("boxColor"+boxColor)
        // now clear values in state, thereby clearing the form fields
        // console.log('boxesArrayheith'+boxesArray[0]['height'])
        // console.log('boxesArraywidth'+boxesArray[0]['width'])
        // console.log('boxesArraybackground'+boxesArray[0]['background'])
        setBoxColor(""); //
    };



    return (
        <>
            <form onSubmit= {handleSpecsSubmit}>
                <label className='form-label'>Color</label>
                <input className='form-control' type="text" onChange={ (e) => setBoxColor(e.target.value)} value={boxColor}/>
                <input type="submit" value="Add Box"/>
            </form>
        </>
    );
};

export default BoxSpecsForm;