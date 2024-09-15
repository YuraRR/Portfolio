import React from "react";
import { useTheme } from "../components/ThemeProvider";

export default function Icon({ name, styles, onClick }) {
  const { theme } = useTheme();
  return (
    <img onClick={onClick} src={`icons/${theme}Theme/icon-${name}-${theme}.svg`} alt={name} className={styles} />
  );
}
