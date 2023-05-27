import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/CartContext";
import { MainRouter } from "./routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <MainRouter />
          <Toaster />
        </CartContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
