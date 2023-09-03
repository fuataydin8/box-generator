import { useState } from 'react'
import './App.css'
import BoxSpecsForm from './components/BoxSpecsForm'
import BoxDisplay from './components/BoxDisplay'

// Here in 'App.jsx' we create an array 'getter' and 'setter' that will be passed to both
// the 'Form' and the 'Display' components through the 'props'. Note: the 'Display' doesn't use the 
// 'setter' function, only the array value (getter).
// In the 'Form', onSubmit, we use the setter function to append a new 'styles' object based on the form 
// entries. We need to use the '...' spread syntax to append the new style. Push doesn't work.
// In 'Form', we also have 3 state instances: boxColor, boxHeight and boxWidth
// These are used just within the 'Form' using the 'controlled component' strategy
// When the the 'onSubmit' function is called, those 3 values are used to create the 'styles'
// object that is added onto the boxSpecsList.
// In 'Display', we use .map to iterate through however many 'style' objects are in our
// 'boxSpecsList' and renders a <div> for each object in the list
// I wonder how hard it would be to add a button that 'clears' the list
// by 'setting' boxSpecsList to [] ... I just did it; turns out it was pretty easy


function App() {
  const [boxSpecsList, setBoxSpecsList] = useState([]);

  return (
    <>
      <BoxSpecsForm boxSpecsList={ boxSpecsList } setBoxSpecsList={setBoxSpecsList} />
      <BoxDisplay boxSpecsList={ boxSpecsList }/>
    </>
  )
}

export default App