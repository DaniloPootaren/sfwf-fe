import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Routes from "./routes";
import { colorScheme } from "./utils";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux";
import { Provider } from "react-redux";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colorScheme.primary,
    },
    secondary: {
      main: colorScheme.secondary,
    },
  },
});

export const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
