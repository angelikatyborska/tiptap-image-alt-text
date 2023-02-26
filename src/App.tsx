import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import History from '@tiptap/extension-history'
import { EditorContent, useEditor } from '@tiptap/react'
import React from 'react'
import './App.css'
import CustomImage from './Image'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      CustomImage,
      Dropcursor,
      History
    ],
    content: `
    <p>The image below has no alt text.</p>
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
