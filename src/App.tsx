import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={["New York", "Los Angeles", "San Francisco"]}
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
    </div>
  );
}
export default App;
