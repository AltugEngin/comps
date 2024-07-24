
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
 

  return (
    <div>
      <Link to='/Accordion'>Accordion</Link>
      <Link to='/Dropdown'>Dropdown</Link>
      
      <div>
      <Route path="/Accordion"><AccordionPage/></Route>
      <Route path="/Dropdown"><DropdownPage/></Route>
     
      </div>
      
      </div>
     
  );
}

export default App;
