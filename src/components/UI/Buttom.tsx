import {ReactNode, ButtonHTMLAttributes} from 'react'

interface Iprop extends ButtonHTMLAttributes<HTMLButtonElement>
{
  className?:string;
  children: ReactNode;
  width?: "w-full" | "w-fit" 
}

const Buttom = ({className ,children, width="w-full", ...rest }: Iprop) => {
  return (
    <button {...rest}  className= {` ${width} w-full rounded-md p-2 text-white ${className}`} >
      {children}
    </button>
  );
};

export default Buttom;