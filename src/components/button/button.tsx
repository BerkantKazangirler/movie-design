import React from "react";
import classname from "classnames";
//classnames bir kütüphane
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  //buttonun bütün elemanlarını al (onclick vb)
  children: React.ReactNode;
  withIcon?: boolean;
  variant?: "line-dark";
  type?: "submit" | "button" | "reset";
  size: "large" | "normal" | "small";
  buttonstyle: "primary" | "secondary" | "tertiary" | "disable" | "state";
}
function Button({
  children,
  withIcon = false,
  variant,
  type,
  size,
  buttonstyle,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classname({
        //   "bg-main-primary": variant === "purple",
        // Eğer varitant'ı purple ise bg-main-primary'ı yap
        //"bg-main-primary": variant === "purple",
        // "bg-line-dark": variant === "line-dark",
        "justify-center": withIcon,
        flex: withIcon,

        "dark:bg-line-dark": variant == "line-dark",
        "bg-grayscale-10": variant == "line-dark",
        "dark:text-white": variant == "line-dark",
        "text-black": variant == "line-dark",
        "font-bold": variant == "line-dark",
        "border-none": variant == "line-dark",

        "bg-main-primary": buttonstyle == "primary",

        border: buttonstyle == "secondary",
        "border-main-primary": buttonstyle == "secondary",

        "bg-grayscale-20": buttonstyle == "disable",
        "disabled:": buttonstyle == "disable",

        "bg-state-bg": buttonstyle == "state",

        "pt-[4px]": size == "small",
        "pr-[16px]": size == "small",
        "pb-[4px]": size == "small",
        "pl-[16px]": size == "small",
        "rounded-2xl": size == "small",
        "text-xs": size == "small",

        "pt-[8px]": size == "normal",
        "pr-[24px]": size == "normal",
        "pb-[8px]": size == "normal",
        "pl-[24px]": size == "normal",
        "rounded-[20px]": size == "normal",
        "text-base": size == "normal",

        "pt-[16px]": size == "large",
        "pr-[32px]": size == "large",
        "pb-[16px]": size == "large",
        "pl-[32px]": size == "large",
        "rounded-3xl": size == "large",
        "text-lg": size == "large",
      })}
    >
      {children}
    </button>
  );
}

export default Button;
