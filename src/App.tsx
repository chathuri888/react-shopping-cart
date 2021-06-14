import React from "react";
import { Provider } from "react-redux";

import Routers from "./routers";
import store from "./store";
import { GlobalStyle } from "./styles/Global";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routers />
    </Provider>
  );
};

export default App;
