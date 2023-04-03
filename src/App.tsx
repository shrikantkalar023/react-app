import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipcode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 49112 },
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>Update</Button>{" "}
    </div>
  );
}
export default App;
