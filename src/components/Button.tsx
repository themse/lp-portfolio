import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="text-white font-secondary bg-black rounded-3xl py-2 px-8"
      {...props}
    >
      {children}
    </button>
  );
};
