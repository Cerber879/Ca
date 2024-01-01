import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./ReduxStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
<<<<<<< HEAD
  document.getElementById("root") as HTMLElement
=======
  document.getElementById('root') as HTMLElement
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
