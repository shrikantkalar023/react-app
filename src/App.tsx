import { useState } from "react";
import Button from "./components/Button";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        // draft is a proxy obj that records changes we going to apply to bug aray. copy of bug array.
        const bug = draft.find((item) => item.id === 1);
        bug ? (bug.fixed = true) : null;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}
          {bug.fixed === true ? "fixed" : "new"}
        </p>
      ))}
      <Button onClick={handleClick}>Update</Button>{" "}
    </div>
  );
}
export default App;
