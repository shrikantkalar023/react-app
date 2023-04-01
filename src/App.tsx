import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>my button</Button>
    </div>
  );
}
export default App;
