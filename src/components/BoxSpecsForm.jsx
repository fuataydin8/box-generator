import React, { useState } from 'react';


const BoxSpecsForm = (props) => {
    const { boxSpecsList, setBoxSpecsList} = props; // destructure props for 'lifted' getter and setter
    const [boxColor, setBoxColor] = useState("");
    const [boxHeight, setBoxHeight] = useState("");
    const [boxWidth, setBoxWidth] = useState("");

    const handleSpecsSubmit = (e) => {
        e.preventDefault();
        setBoxSpecsList([...boxSpecsList,{width: +boxWidth, height: +boxHeight, background: boxColor}]);
        // i tried to 'push' the new specs to the array but somehow that didn't trigger
        // a re-render of the 'Display' but when using the '...' spread to update the array,
        // that triggers the re-render of 'Display'
        setBoxColor(""); // clear the values in the form
        setBoxWidth(""); //clear the values in the form
        setBoxHeight(""); //clear the values in the form
    };

    const handleClear = (e) => {
        e.preventDefault();
        setBoxSpecsList([]);
    }

    return (
        <>
            <form onSubmit= {handleSpecsSubmit}>
                <label className='form-label'>Color</label>
                <input className='form-control' type="text" onChange={ (e) => setBoxColor(e.target.value)} value={boxColor}/>
                <label className='form-label'>Height</label>
                <input className='form-control' type="number" onChange={ (e) => setBoxHeight(e.target.value)} value={boxHeight}/>
                <label className='form-label'>Width</label>
                <input className='form-control' type="number" onChange={ (e) => setBoxWidth(e.target.value)} value={boxWidth}/>
                <input className='form-control' type="submit" value="Add Box"/>
            </form>
            <form onSubmit= {handleClear}>
                <input className='form-control' type="submit" value="Clear"/>
            </form>
        </>
    );
};

export default BoxSpecsForm;