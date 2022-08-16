import React from "react";
import ReactDOM from "react-dom";
import { version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

import { PageHeader } from "antd";

const Tabs = require("chrome-tabs");

console.log(Tabs);

ReactDOM.render(
  <div className="App">
    <PageHeader />
    <h1>antd version: {version}</h1>
  </div>,
  document.getElementById("root")
);
