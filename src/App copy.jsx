import { useState } from 'react'
import './App.css'
import BoxSpecsForm from './components/BoxSpecsForm'
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [boxSpecs, setBoxSpecs] = useState("");

  // Here we are making a function that will be passed
  // through to the 'Form' component. When the 'Form' component
  // calls this function, the 'setter' function for 'BoxSpecs' is in
  // turn called. Setting the value for boxSpecs to whatever the 'Form' 
  // passes in as an argument.
  // Now, the value of the props that are being passed to the 'Display'
  // component have changed. On the 'Display' component 'props.box' is new.
  // So wherever we were using 'props.box' we should see a change

  // Thus, the plan will be to maintain an array of styles in 'Display' and every time
  // that the props.box value changes, we add to that array(??)

  // Or, do we maintain the array at the App.jsx level??
  // Let's try that first...
  const newBoxCreated = ( newBoxSpecs) => {
    setBoxSpecs( newBoxSpecs);
  }

  return (
    <>
      <BoxSpecsForm onNewBox={ newBoxCreated } />
      <BoxDisplay box={ boxSpecs } />
    </>
  )
}

export default App