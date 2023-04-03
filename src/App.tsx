import { useState } from "react";
import produce from "immer";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quaerat
        molestiae a adipisci debitis repudiandae rerum sunt sit, repellendus
        unde atque explicabo fuga assumenda magnam aliquid ullam optio quidem,
        mollitia enim perferendis sed numquam recusandae? Voluptate numquam
        aperiam non eos cumque enim tenetur harum reiciendis ex tempora
        repellendus sunt ipsa placeat, suscipit, adipisci quam natus consequatur
        nesciunt ea rerum fugit pariatur maxime sint temporibus. Atque sunt quae
        deleniti incidunt labore ea, illum eveniet quam, perferendis repudiandae
        saepe nihil fugiat beatae similique, libero voluptas omnis earum
        deserunt ad! Ullam odio laboriosam harum explicabo neque molestias
        eveniet, similique mollitia laborum ad nulla.
      </ExpandableText>
    </div>
  );
}
export default App;
