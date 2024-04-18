import "./App.css";
import { Main } from "./components";
import { ThemeContextProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

export default App;
