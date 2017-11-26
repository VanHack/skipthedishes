import React from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

const theme = {};

injectGlobal`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        GET SHIT DONE
        <br />
        &
        <br />
        ROCK THOSE FUCKING DISHES!
      </div>
    </ThemeProvider>
  );
};

export default App;
