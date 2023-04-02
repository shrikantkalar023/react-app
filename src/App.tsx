import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);
  };
  return (
    <div>
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
}
export default App;
