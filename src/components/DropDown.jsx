import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
function DropDown({options,value,onChange}){
    const [isOpen,setIsOpen]=useState(false)
    const renderedOptions=options.map((option)=>{
return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>{console.log(option.label); setIsOpen(false);onChange(option)}} key={option.value}>{option.label}</div>
    })

    
    
    return( <div className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={()=>{setIsOpen(!isOpen);}}>{value?.label || 'Select...'}<GoChevronDown/></div>
        <div>{isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}</div>
        </div>);
}

export default DropDown;