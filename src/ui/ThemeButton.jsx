import { useTheme } from "../components/ThemeProvider";
import Icon from "./Icon";
export default function ThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover:rotate-[360deg] transition-transform duration-1000 active:rotate-[-360deg] active:duration-200 active:translate-y-1"
    >
      <Icon name="theme" />
    </button>
  );
}
