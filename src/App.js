// Play.ht to the moon 🚀

import * as React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainRouter from "./navigation/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
