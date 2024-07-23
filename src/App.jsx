import DropDown from "./components/DropDown";
import { useState } from "react";
function App() {
  const [selection,setSelection]=useState(null);
  const handleSelection=(option)=>{
setSelection(option)
  }
  const options=[
    {label:'Red', value:'red'},
    {label:'Green', value:'green'},
    {label:'Blue', value:'blue'},
  ]
 return <DropDown options={options} value={selection} onChange={handleSelection}/>
}

export default App;
