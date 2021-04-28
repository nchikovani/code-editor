import React, {useRef, useEffect} from 'react';
import {loader}  from "@monaco-editor/react";
import './CodeEditor.scss';

const CodeEditor = ({value, setValue}) => {
  const editorRef = useRef(null);

  useEffect(() => {
    loader.init().then(monaco => {
      const node = editorRef.current;
      if (!node) return;
      const ed = monaco.editor.create(node, {
        language: 'csharp',
        value: value,
        tabSize: 2,
        automaticLayout: true,
        minimap: {
          enabled: false
        },
      });

      ed.onDidChangeModelContent(() => {
        setValue(ed.getValue());
      });
    });

  }, []);

  return (
    <div className='code-editor' ref={editorRef}/>
  );
}

export default CodeEditor;