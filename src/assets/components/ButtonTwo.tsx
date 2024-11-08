import { ReactNode } from "react";
import ArrowRight from "/public/arrowRight.svg";

interface Props {
  children: ReactNode;
}

const ButtonTwo = ({ children }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <button className="text-lg text-primary">{children}</button>
      <img className="w-6" src={ArrowRight} alt="arrow right" />
    </div>
  );
};

export default ButtonTwo;
