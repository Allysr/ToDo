import { ThemeProvider } from "styled-components";
import { Home } from "./page/home";
import { DefaultTheme } from "./styles/styles";
import "./styles.css"

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
