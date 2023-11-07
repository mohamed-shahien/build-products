interface Iprop {
    msg:string;
}

export const ErrorMessag = ({msg }: Iprop) => {
  return (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  );
};
