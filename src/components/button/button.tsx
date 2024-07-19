import React from "react";
import classname from "classnames";
//classnames bir kütüphane
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  //buttonun bütün elemanlarını al (onclick vb)
  children: React.ReactNode;
  withIcon?: boolean;
  variant?: "purple" | "line-dark";
  margin?: string;
  padding?: "small" | "normal" | "large";
}
function Button({
  children,
  withIcon = false,
  variant = "purple",
  margin = "0",
  padding = "small",
}: ButtonProps) {
  return (
    <button
      className={classname("rounded-2xl", {
        //   "bg-main-primary": variant === "purple",
        // Eğer varitant'ı purple ise bg-main-primary'ı yap
        "bg-main-primary": variant === "purple",
        "bg-line-dark": variant === "line-dark",
        "mt-8": margin === "8",
        "justify-center": withIcon,
        flex: withIcon,
        "p-2": padding == "small",
        "p-3": padding == "normal",
        "p-4": padding == "large",
      })}
    >
      {children}
    </button>
  );
}

export default Button;
