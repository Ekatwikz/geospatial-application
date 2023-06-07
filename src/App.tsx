import "./App.css";

import TripCalculatorForm from "./TripCalculatorForm";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <CssBaseline />
      <TripCalculatorForm />
    </SnackbarProvider>
  );
}

export default App;
