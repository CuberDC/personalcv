import React from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
import "./i18n"; // 导入i18n配置
import Main from "./containers/Main";

function App() {
  const { i18n } = useTranslation();

  return (
    <div lang={i18n.language}>
      <Main />
    </div>
  );
}

export default App;
