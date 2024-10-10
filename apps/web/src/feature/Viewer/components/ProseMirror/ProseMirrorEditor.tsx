"use client"; // Next.js에서 클라이언트 측 코드임을 명시

import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import { useEffect, useRef } from "react";

const ProseMirrorEditor = (): JSX.Element => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  
  const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks,
  });
  const doc = DOMParser.fromSchema(mySchema).parse(document.createElement("div"));
  const plugins = exampleSetup({ schema: mySchema });

  useEffect(() => {
    if (!editorRef.current) return;
    const view = new EditorView(editorRef.current, {
      state: EditorState.create({
        doc,
        plugins
      })
    })

    return () => {
      view.destroy()
    }
  }, [])

  return <div id="editor" ref={editorRef}></div>
}

export default ProseMirrorEditor;