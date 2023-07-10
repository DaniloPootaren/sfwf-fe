import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Routes from "./routes";
import { colorScheme } from "./utils";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colorScheme.primary,
    },
    secondary: {
      main: colorScheme.secondary,
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
