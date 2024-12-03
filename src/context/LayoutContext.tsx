import { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

interface LayoutContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isOpenNavbar: boolean;
  setIsOpenNavbar: (isOpenNavbar: boolean) => void;
  showFooter: boolean;
  setShowFooter: (showFooter: boolean) => void;
}

const LayoutContext = createContext<LayoutContextProps>({
  theme: "light",
  setTheme: () => {},
  isOpenNavbar: false,
  setIsOpenNavbar: () => {},
  showFooter: false,
  setShowFooter: () => {},
});

export function LayoutContextProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        theme,
        setTheme,
        isOpenNavbar,
        setIsOpenNavbar,
        showFooter,
        setShowFooter,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export default LayoutContext;
