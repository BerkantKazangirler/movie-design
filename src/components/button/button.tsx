import React from "react";
import classname from "classnames";
//classnames bir kütüphane
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  //buttonun bütün elemanlarını al (onclick vb)
  children: React.ReactNode;
  withIcon?: boolean;
  variant?: "purple" | "line-dark";
  buttontype?: "submit" | "button" | "reset";
  size: "large" | "normal" | "small";
}
function Button({
  children,
  withIcon = false,
  variant = "purple",
  buttontype,
  size,
}: ButtonProps) {
  return (
    <button
      type={buttontype}
      className={classname({
        //   "bg-main-primary": variant === "purple",
        // Eğer varitant'ı purple ise bg-main-primary'ı yap
        "bg-main-primary": variant === "purple",
        "bg-line-dark": variant === "line-dark",
        "justify-center": withIcon,
        flex: withIcon,

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
