import "./Toggle.css";
import { Props } from "../types";

const Toggle = ({ theme, toggleTheme }: Props) => (
  <label className={`toggle ${theme}`}>
    <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
    <span>{`Dark mode ${theme === "dark" ? "enabled" : "disabled"}`}</span>
  </label>
);

export default Toggle;
