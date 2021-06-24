import React from "react";
import { Provider } from "react-redux";

import Routers from "./routers";
import store from "./store";
import { GlobalStyle } from "./styles/Global";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Routers />
    </Provider>
  );
};

export default App;
