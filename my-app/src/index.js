import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "./index.css";
//import reportWebVitals from './reportWebVitals';// eslint-disable-line no-unused-vars

import Clock from "./chapter_04/Clock";
import CommenList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import App from "./Extra_AI_wordtest/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* <NotificationList /> */}
      <App />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
