import React, { useRef } from "react";
import CodeWindow from "./CodeWindow";


export default function App() {
  
  const editor = useRef();
  const state = useRef();
  const view = useRef();

  return (
    <div className="App">
      <CodeWindow 
        editor={editor}
        state={state}
        view={view}
      />
    </div>
  );

}