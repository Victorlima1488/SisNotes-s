import { ThemeProvider } from "styled-components";
import { Details } from "./pages/Details";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Button } from "./components/Button";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  )
}
