import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  let lessText = children.slice(0, maxChars);
  return (
    <>
      <p style={{ display: "inline" }}>{isExpanded ? children : lessText}...</p>
      <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
