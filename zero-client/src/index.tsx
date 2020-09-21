import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App/App";

ReactDOM.render(
  <ConfigProvider prefixCls="zero" locale={enUS}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
