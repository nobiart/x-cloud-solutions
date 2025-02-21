import { ThemeProvider } from "styled-components";
import { styledTheme } from "./theme/styled-theme.ts";
import { FontStyles, GlobalStyle } from "./theme/global-style.ts";
import { AnimatedText } from "./components/AnimatedText.tsx";

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <h1>Hello world</h1>
      <AnimatedText words={["CRM", "VOIP", "API"]} />
      <GlobalStyle />
      <FontStyles />
    </ThemeProvider>
  );
}

export default App;
