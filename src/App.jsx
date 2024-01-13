import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Routes } from "./routes";


export function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      { <Routes /> }
    </ThemeProvider>
  )
}
