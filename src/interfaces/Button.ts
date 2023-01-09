export default interface IButton {
  children: JSX.Element | string;
  type: "button" | "reset" | "submit";
  onClick?: () => void;
}
