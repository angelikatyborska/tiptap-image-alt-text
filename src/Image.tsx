import Image from '@tiptap/extension-image'
import { NodeViewWrapper, NodeViewWrapperProps, ReactNodeViewRenderer } from '@tiptap/react';
import './Image.css'

function ImageNode(props: NodeViewWrapperProps) {
  const { src, alt } = props.node.attrs

  let className = 'image'
  if (props.selected) { className += ' ProseMirror-selectednode'}

  return (
    <NodeViewWrapper className={className} data-drag-handle>
      <img src={src} alt={alt} />
    </NodeViewWrapper>
  )
}

export default Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageNode)
  }
})
