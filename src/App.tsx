import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React from 'react'
import './App.css'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Image,
      Dropcursor,
    ],
    content: `
    <p>There are two images below. One with alt text, and one without.</p>
    <img src="https://source.unsplash.com/8xznAGy4HcY/400x200" alt="Sandy hills with a foggy background" />
    <img src="https://source.unsplash.com/K9QHL52rE2k/400x200" />
  `,
  })

  if (!editor) { return null }

  return (
    <div className="editorWrapper">
      <h1>TipTap Image Alt Text demo</h1>
      <EditorContent editor={editor} />
    </div>
  )
}
