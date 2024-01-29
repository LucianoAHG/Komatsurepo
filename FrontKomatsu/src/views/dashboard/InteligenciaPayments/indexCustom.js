import React, { useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import ColorSelectorNode from './CustomNode';

import './index.css';

// const initBgColor = '#1A192B';

const connectionLineStyle = { stroke: 'grey' };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  //   const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color
            }
          };
        })
      );
    };

    setNodes([
      {
        id: '1',
        type: 'input',
        data: { label: 'Node 1er' },
        style: { border: '1px solid grey', padding: 10 },
        position: { x: 0, y: 50 },
        sourcePosition: 'right'
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { onChange: onChange },
        style: { border: '1px solid #777', padding: 10, background: 'white', borderRadius: 2 },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: 'left'
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: 'left'
      }
    ]);

    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: 'grey' }
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '4',
        sourceHandle: 'a',
        animated: true,
        style: { stroke: 'grey' }
      },
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        animated: true,
        style: { stroke: 'grey' }
      }
    ]);
  }, []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: 'grey' } }, eds)), []);
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: '#F5F5F5' }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        fitViewOptions
      ></ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
