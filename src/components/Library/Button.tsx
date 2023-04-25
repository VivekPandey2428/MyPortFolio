import classNames from "classnames";
import * as React from "react";
import {twMerge} from "tailwind-merge";

export interface ButtonProps extends React.ComponentProps<"button"> {
  color?: "primary" | "light" | "primaryBlue" | "lightBlue";
}

const Button = ({
  children,
  className,
  color = "primary",
  type = "button",
  onClick,
  ...restProps
}: ButtonProps) => {
  const skinClassNames = {
    primary: {
      "bg-primary-700 border-primary-700": !restProps.disabled,
      "bg-gray-500 border": restProps.disabled,
      "active:bg-primary-800": onClick && !restProps.disabled,
      "text-white": true,
    },
    light: {
      "text-primary-700 border-primary-700": !restProps.disabled,
      "bg-gray-100 text-gray-500 border-gray-500": restProps.disabled,
      "active:bg-gray-50": onClick && !restProps.disabled,
    },
    primaryBlue: {
      "bg-primaryBlue-700 border-primaryBlue-700": !restProps.disabled,
      "bg-[#8180A4] border": restProps.disabled,
      "active:bg-primaryBlue-600": onClick && !restProps.disabled,
      "text-white": true,
    },
    lightBlue: {
      "text-primaryBlue-700 border-primaryBlue-700": !restProps.disabled,
      "bg-gray-100 text-gray-500 border-gray-500": restProps.disabled,
      "active:bg-gray-50": onClick && !restProps.disabled,
    },
  };
  return (
    <button
      className={twMerge(
        classNames(
          "flex justify-center transform items-center p-2 max-w-full rounded transition-all border",
          {
            "cursor-pointer active:scale-95": onClick && !restProps.disabled,
            "hover:shadow-none cursor-not-allowed": restProps.disabled,
            ...skinClassNames[color],
          },
        ),
        className,
      )}
      {...{...restProps, type, ...(!restProps.disabled && {onClick})}}
    >
      {children}
    </button>
  );
};

export default Button;
