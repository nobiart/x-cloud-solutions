import { ThemeProvider } from "styled-components";
import { styledTheme } from "./theme/styled-theme.ts";
import { FontStyles, GlobalStyle } from "./theme/global-style.ts";
import { AnimatedText } from "./components/AnimatedText.tsx";
import LogoSVG from "./assets/images/logo.svg";

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <h1>Hello world</h1>
      <AnimatedText words={["CRM", "VOIP", "API"]} />
      <img src={LogoSVG} alt="" />
      <GlobalStyle />
      <FontStyles />
    </ThemeProvider>
  );
}

export default App;
