import React from "react";
import classname from "classnames";
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  rounded?: "xl" | "2xl" | "3xl";
  required?: "true" | "false";
  maxlength?: number;
  minlength?: number;
  type?: string;
  pattern?: string;
  fontsize?: string;
  customClass?: string;
  value?: string;
}
function Input({
  required,
  placeholder,
  rounded,
  maxlength,
  minlength,
  type,
  pattern,
  id,
  fontsize,
  customClass,
  title,
  value,
}: InputProps) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={classname(
        customClass +
          " dark:bg-dark-smooth dark:text-white text-black border-grayscale-10 dark:border-line-dark bg-line-light p-4",
        {
          "required:": required == "true",
          "rounded-2xl": rounded == "2xl",
          "rounded-3xl": rounded == "3xl",
          "rounded-xl": rounded == "xl",
          "text-sm": fontsize == "sm",
          "text-lg": fontsize == "lg",
          "text-2xl": fontsize == "2xl",
          "font-xl": fontsize == "xl",
        }
      )}
      title={title}
      value={value}
      type={type}
      pattern={pattern}
      maxLength={maxlength}
      minLength={minlength}
    />
  );
}

export default Input;
