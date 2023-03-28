// fn based component

// use PascalCase
function Message() {
  // JSX: JS XML
  const name = "Shrikant";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
