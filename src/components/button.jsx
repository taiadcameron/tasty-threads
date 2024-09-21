const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-seconary-light rounded-xl w-fit"
      onClick={onClick}
    >
      {text.current}
    </button>
  );
};

export default Button;
