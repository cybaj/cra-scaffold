import React from "react";
import "../../../assets/css/App.css";
import { OriginalThemeProvider } from "../../../contexts/themes/react95";

function App() {
  return (
    <div className="App">
      <OriginalThemeProvider>
        <div />
      </OriginalThemeProvider>
    </div>
  );
}

export default App;
