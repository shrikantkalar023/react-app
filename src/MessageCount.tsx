let count = 0;

const MessageCount = () => {
  console.log("Message", count);

  count++;
  return <div>MessageCount {count} </div>;
};

export default MessageCount;
