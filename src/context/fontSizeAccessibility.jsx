import { createContext, useContext, useState } from "react";

const FontSizeAccessibilityContext = createContext();

export function FontSizeAccessibilityWrapper({ children }) {
  const [coefficient, setCoefficient] = useState(1);

  const fonts = {
    moreUltraLarge: `${2 * coefficient}rem`,
    ultraLarge: `${1.5 * coefficient}rem`,
    mediumLarge: `${1.38 * coefficient}rem`,
    highLarge: `${1.25 * coefficient}rem`,
    large: `${1.13 * coefficient}rem`,
    regular: `${1 * coefficient}rem`,
    semiRegular: `${0.9 * coefficient}rem`,
    medium: `${0.875 * coefficient}rem`,
    semiMedium: `${0.81 * coefficient}rem`,
    small: `${0.75 * coefficient}rem`,
    tiny: `${0.625 * coefficient}rem`,
    micro: `${0.5 * coefficient}rem`,
  };

  return (
    <FontSizeAccessibilityContext.Provider
      value={{ fonts, coefficient, setCoefficient }}
    >
      {children}
    </FontSizeAccessibilityContext.Provider>
  );
}

export function useFontSizeAccessibilityContext() {
  const context = useContext(FontSizeAccessibilityContext);
  return context;
}
