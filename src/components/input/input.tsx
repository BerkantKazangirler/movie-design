interface Props {
  placeholder: string;
  rounded: string;
}
// String olduğunu belirtiyoruz rounded-2xl

const Input = ({ placeholder, rounded }: Props) => {
  return (
    <input
      type="text"
      className={`bg-dark-smooth border-line-dark p-4 ${
        "rounded-" + rounded
      } text-grayscale-60`}
      placeholder={placeholder}
    />
  );
};

export default Input;
