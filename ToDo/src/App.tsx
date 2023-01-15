import { ThemeProvider } from "styled-components";
import { Home } from "./page/home";
import { DefaultTheme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
