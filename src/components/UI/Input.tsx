import { InputHTMLAttributes } from "react";
interface Iprop extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iprop) => {
  return (
    <input
      {...rest}
      className="border-[1px] border-gray-300 shadow-md focus:borderindingo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md px-3 py-3 text-lg"
    />
  );
};

export default Input;
