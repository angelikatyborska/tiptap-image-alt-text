import Image from '@tiptap/extension-image'
import { NodeViewWrapper, NodeViewWrapperProps, ReactNodeViewRenderer } from '@tiptap/react';
import './Image.css'

function ImageNode(props: NodeViewWrapperProps) {
  const { updateAttributes } = props
  const { src, alt } = props.node.attrs

  let className = 'image'
  if (props.selected) { className += ' ProseMirror-selectednode'}

  const onEditAlt = () => {
    const newAlt = prompt('Set alt text:', alt || '')
    updateAttributes({alt: newAlt})
  }

  return (
    <NodeViewWrapper className={className} data-drag-handle>
      <img src={src} alt={alt} />
      <span className="alt-text-indicator">
        { alt ?
            <span className="symbol symbol-positive">✔</span> :
            <span className="symbol symbol-negative">!</span>
        }
        { alt ?
          <span className="text">Alt text: "{alt}".</span>:
          <span className="text">Alt text missing.</span>
        }

        <button className="edit" type="button" onClick={onEditAlt}>
          Edit
        </button>
      </span>
    </NodeViewWrapper>
  )
}

export default Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageNode)
  }
})
