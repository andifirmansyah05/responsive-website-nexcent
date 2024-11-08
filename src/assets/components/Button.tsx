interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return <button className={`${children === "Log in" ? "bg-transparent text-primary" : "bg-primary text-white"} px-4 py-2 rounded`}>{children}</button>;
};

export default Button;
