import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { basicSetup } from "@codemirror/basic-setup";


export default function CodeWindow({editor, state, view}) {

  useEffect(() => {

    state = EditorState.create({
      doc: "a ",
      extensions: [basicSetup, javascript()]
    });

    view = new EditorView({ state, parent: editor.current });

    return () => {
      view.destroy();
    };
    
  }, []);

  return (
    <div className="CodeWindow">
      <p>
        Type option-i i (î) into the editor below. After you type it cmd-/
        (toggle comments) will stop working.
      </p>
      <div ref={editor}></div>
    </div>
  );
}