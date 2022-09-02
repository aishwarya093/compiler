import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

export function Ide() {
  return (
   <Editor
     height="60vh"
     width="110vh"
     defaultLanguage="javascript"
     defaultValue="// Type something cool"
   />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Ide />, rootElement);