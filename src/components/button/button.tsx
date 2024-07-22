import React from "react";
import classname from "classnames";
//classnames bir kütüphane
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  //buttonun bütün elemanlarını al (onclick vb)
  children: React.ReactNode;
  withIcon?: boolean;
  variant?: "purple" | "line-dark";
  margin?: string;
  buttontype?: "submit" | "button" | "reset";
  padding?: "none" | "small" | "normal" | "large";
  paddingpx?: "none" | "small" | "normal" | "large";
  required?: "true" | "false";
}
function Button({
  children,
  required,
  withIcon = false,
  variant = "purple",
  margin = "0",
  paddingpx = "none",
  padding = "none",
  buttontype,
}: ButtonProps) {
  return (
    <button
      type={buttontype}
      className={classname("rounded-2xl", {
        //   "bg-main-primary": variant === "purple",
        // Eğer varitant'ı purple ise bg-main-primary'ı yap
        "bg-main-primary": variant === "purple",
        "bg-line-dark": variant === "line-dark",
        "mt-8": margin === "8",
        "justify-center": withIcon,
        flex: withIcon,
        "p-0": padding == "none",
        "p-1": padding == "small",
        "p-3": padding == "normal",
        "p-4": padding == "large",
        "px-0": paddingpx == "none",
        "px-2": paddingpx == "small",
        "px-3": paddingpx == "normal",
        "px-6": paddingpx == "large",
        //  none: buttontype == "normal",
        // sumbit: buttontype == "sumbit",
        // reset: buttontype == "reset",
        "required:": required == "true",
      })}
    >
      {children}
    </button>
  );
}

export default Button;
