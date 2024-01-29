import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Stack, Divider, Avatar } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX } from '@tabler/icons';

const CustomNode = ({ data, isConnectable }) => {
  const theme = useTheme();
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        //style={{ background: '#555555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Grid sx={{ border: '1px solid', p: 0.5, backgroundColor: 'white', borderRadius: 1 }}>
        <Stack direction="row" justifyContent="flex-end" sx={{ mb: 1 }}>
          <Grid item alignItems="flex-end">
            <Avatar
              sx={{
                backgroundColor: 'white',
                color: `${theme.palette.grey[300]}`,
                border: `2px solid ${theme.palette.grey[400]}`,
                width: 16,
                height: 16,
                padding: '1px',
                justifyItems: 'center'
              }}
            >
              <IconButton>
                <IconCircleX />
              </IconButton>
            </Avatar>
          </Grid>
        </Stack>
        <Card sx={{ minWidth: 140, padding: 1, margin: 0, border: `1px solid ${theme.palette.primary[200]}`, borderRadius: 1 }}>
          <CardContent sx={{ padding: 0, margin: 0 }}>
            <Grid container direction="column">
              <Grid item sx={{ width: '100%' }}>
                <Typography>{data.name} </Typography>
              </Grid>
              <Divider></Divider>
              <Grid item sx={{ width: '100%' }}>
                <Typography>{data.action} </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        //style={{ background: '#555555' }}
        isConnectable={isConnectable}
      />
    </>
  );
};
export default CustomNode;
