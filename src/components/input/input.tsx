interface Props {
  placeholder: string;
}
// String olduğunu belirtiyoruz

const Input = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      id="pass"
      className="bg-dark-smooth border-line-dark p-4 rounded-2xl text-grayscale-60"
      placeholder={placeholder}
    />
  );
};

export default Input;
