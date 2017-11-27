import React from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { lighten } from "polished";
import DashboardPage from "../containers/DashboardPage";

const theme = {
  colors: {
    primary: "#BE2C2C",
    primaryLight: lighten(0.2, "#BE2C2C")
  },
  breakpoints: {
    sm: "800px",
    md: "1200px",
    lg: "1600px"
  }
};

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding-top: 70px;
    background: #eee;
    font-family: Lato;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
};

export default App;
