import { ChangeEventHandler, HTMLInputTypeAttribute, } from "react";
import { ChangeHandler } from "react-hook-form";

export default interface IInput {
  type: HTMLInputTypeAttribute;
  value?: string | number;
  placeholder?: string;
  className?: string;
  onChange?: ChangeHandler | ChangeEventHandler;
}
