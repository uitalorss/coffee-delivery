import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyled, Heading1 } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Heading1>Coffee-Delivery</Heading1>
      <GlobalStyled />
    </ThemeProvider>
  )
}