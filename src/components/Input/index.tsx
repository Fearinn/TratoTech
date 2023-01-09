import IInput from "interfaces/Input";
import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

function Input(
  { type, onChange, className, placeholder, value, ...hookForm }: IInput,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
    value={value}
      {...hookForm}
      ref={ref}
      onChange={onChange}
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
    />
  );
}

export default forwardRef(Input);
