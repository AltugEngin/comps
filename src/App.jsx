import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";
function App() {
    const handleClick=()=>{
        console.log("Clicked")
    }
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Alert
        </Button>
      </div>
      <div>
        <Button secondary><GoCloudDownload />Download</Button>
        
      </div>
      <div>
        <Button danger><GoDatabase />Database</Button>
        
      </div>
      <div>
        <Button warning>Buy Now!</Button>
      </div>
      <div>
        <Button success>Buy Now!</Button>
      </div>
    </div>
  );
}

export default App;
