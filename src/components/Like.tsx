import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = (props: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    props.onClick();
  };

  if (status) return <AiFillHeart color="red" size={40} onClick={toggle} />;
  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
