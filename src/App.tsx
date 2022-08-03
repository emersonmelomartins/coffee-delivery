import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainRouter } from "./routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <MainRouter />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
