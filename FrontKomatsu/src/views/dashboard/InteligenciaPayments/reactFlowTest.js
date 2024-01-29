import React, { useCallback, useRef } from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import ReactFlow, { useNodesState, useEdgesState, addEdge, ReactFlowProvider, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
//UseTheme
import { useTheme } from '@mui/material/styles';
import './index.css';
import { useState } from 'react';
import InputNombre from './InputNombre';
import InputAction from './inputAction';
import CustomNode from './CustomNode';

const nodeTypes = {
  customNode: CustomNode
};

const initialNodes = [
  {
    id: '0',
    type: 'input',
    data: { label: 'Inicio', removable: true },
    position: { x: 0, y: 50 }
  }
];

let id = 1;
const getId = () => `${id++}`;

const fitViewOptions = {
  padding: 3
};
const connectionLineStyle = { stroke: '#555555' };
const snapGrid = [20, 20];

/* Funcion para Eliminar un Nodo */

/* Fin funciona Eliminar un Nodo */

/* Funcion Para agregar un Nodo */
const AddNodeOnEdgeDrop = () => {
  //Theme
  const theme = useTheme();
  //Funcion para ingresar data
  const [nodeName, setNodeName] = useState('');
  const [nodeAction, setNodeAction] = useState('');

  const handleNodeNameChange = (name) => {
    setNodeName(name);
  };

  const handleNodeActionChange = (action) => {
    setNodeAction(action);
  };

  //Fin funcion para ingresar data
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  //   const { project } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const targetIsButton = event.target.tagName.toLowerCase() === 'button';

      if (!targetIsButton) {
        return; // Si no es el botón, no hacemos nada
      }

      const id = getId();
      const newNode = {
        id,
        type: 'customNode',
        position: { x: 100, y: 100 }, // Puedes ajustar la posición según tus necesidades
        data: { name: nodeName, action: nodeAction }
      };

      setNodes((prevNodes) => [...prevNodes, newNode]);
    },
    [nodeName, nodeAction]
  );

  const handleAddNode = () => {
    const id = getId();
    const newNode = {
      id,
      type: 'customNode',
      position: { x: 100, y: 100 }, // Puedes ajustar la posición según tus necesidades
      data: { name: nodeName, action: nodeAction },
      sourcePosition: 'top'
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };
  /* Fin Funcion para agregar Nodo */
  return (
    <>
      <Grid container direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Grid item xs={12} md={2}>
          <Stack direction="column" spacing={1}>
            <Grid item sx={{ width: '100%' }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 600, color: `${theme.palette.grey[500]}` }}>Configura tu Nodo</Typography>
            </Grid>
            <Grid item>
              <InputNombre onNameChange={handleNodeNameChange} />
            </Grid>
            <Grid item>
              <InputAction onActionChange={handleNodeActionChange} />
            </Grid>
            <Grid item>
              <Button sx={{ width: '100%' }} variant="contained" onClick={handleAddNode}>
                Agregar Nodo
              </Button>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} md={10} sx={{ width: '100%', height: '100%' }}>
          <div className="wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              style={{ width: '100%', height: '100%', backgroundColor: `${theme.palette.primary.light}` }}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onConnectStart={onConnectStart}
              onConnectEnd={onConnectEnd}
              nodeTypes={nodeTypes}
              fitView
              connectionLineStyle={connectionLineStyle}
              snapToGrid={true}
              snapGrid={snapGrid}
              fitViewOptions={fitViewOptions}
            >
              {' '}
              <Controls />
            </ReactFlow>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const App = () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);

export default App;
