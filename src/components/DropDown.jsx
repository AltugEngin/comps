import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function DropDown({options,value,onChange}){
    const [isOpen,setIsOpen]=useState(false)
    const renderedOptions=options.map((option)=>{
return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>{console.log(option.label); setIsOpen(false);onChange(option)}} key={option.value}>{option.label}</div>
    })

    
    
    return( <div className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={()=>{setIsOpen(!isOpen);}}>{value?.label || 'Select...'}<GoChevronDown/></Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>);
}

export default DropDown;