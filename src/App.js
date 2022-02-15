import React,{useState} from 'react'
import Homemount from './component/Homemount'
import Home from './component/Home'
import "./App.css"
import Home2 from './component/Home2'
import Updating from './component/Updating'
import Home3 from './component/Home3'
import Unmounting from './component/Unmounting'


 function App() {
  let [comp, setComp] = useState(true);
  return (
    <div className='heading'>
       <h1>React lifecycle</h1>  
      <div className='image'></div>
      <Home/>
      <Homemount/>
      <Home2/>
      <Updating/>
      <Home3/>
      {comp && <Unmounting/>}
      <button onClick={()=>{setComp(false)}}>Remove Component</button>
 

    </div>
  )
}
export default App