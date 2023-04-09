import { Theme } from "../../utils/useDarkMode/types.js";

export interface Props {
  theme: Theme;
  toggleTheme: () => void;
}
