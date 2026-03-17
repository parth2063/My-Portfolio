const Alert = ({ type, text }) => {
  const baseStyle =
    "fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white z-50 transition-all duration-300";

  const typeStyles =
    type === "success"
      ? "bg-green-500"
      : type === "danger"
      ? "bg-red-500"
      : "bg-blue-500";

  return <div className={`${baseStyle} ${typeStyles}`}>{text}</div>;
};

export default Alert;