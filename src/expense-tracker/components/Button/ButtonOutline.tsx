interface Props {
  color:
    | "primary"
    | "secondary"
    | "seccess"
    | "danger"
    | "warning"
    | "info"
    | "light";
  children: string;
  onClick: () => void;
}

const ButtonOutline = ({ color, children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`btn btn-outline-${color}`}>
      {children}
    </button>
  );
};

export default ButtonOutline;
