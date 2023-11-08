import { FC, PropsWithChildren } from "react";
import { ButtonBlock } from "./Button.styles";

interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button: FC<PropsWithChildren<IButton>> = ({ className, children, onClick }) => {
  return (
    <ButtonBlock className={className} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
};

export default Button;
