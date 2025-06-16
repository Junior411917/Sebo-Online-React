// /src/App.jsx

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/context";
import AppRouter from "./routes/AppRouter";




export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
