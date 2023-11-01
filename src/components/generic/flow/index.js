import React from 'react'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'

export default (props) => {
  const { initialEdges, initialNodes } = props

  return <div className='w-full h-96  '>
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      zoomOnScroll={false}
      panOnDrag={false} />
  </div>
}