import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/** historyApi 접근 -> window객체는 history객체를 통해 브라우저의 세션 기록에 접근할 수 있음*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
