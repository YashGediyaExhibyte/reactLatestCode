import type {
  ReactNode,
  FC,
  MouseEventHandler,
  ButtonHTMLAttributes,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  onClick,
  type,
  children,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
