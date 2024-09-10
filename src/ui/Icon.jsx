import React from "react";
import { useTheme } from "../components/ThemeProvider";

export default function Icon({ name, size }) {
  const { theme } = useTheme();
  return <img src={`/icons/${theme}Theme/icon-${name}-${theme}.svg`} alt={name} className={size} />;
}
