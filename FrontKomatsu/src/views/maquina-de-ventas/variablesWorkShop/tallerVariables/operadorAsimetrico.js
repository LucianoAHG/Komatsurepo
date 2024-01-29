import React from 'react';
import { Stack, IconButton, Grid } from '@mui/material';

//import Icons
import { IconPlus, IconMinus, IconDivide, IconCircleX, IconParentheses, IconParenthesesOff } from '@tabler/icons';
import TituloStandar from '../tituloStandar';

function Plus() {
  return (
    <>
      <IconButton>
        <IconPlus />
      </IconButton>
    </>
  );
}

function Minus() {
  return (
    <>
      <IconButton>
        <IconMinus />
      </IconButton>
    </>
  );
}
function Divide() {
  return (
    <>
      <IconButton>
        <IconDivide />
      </IconButton>
    </>
  );
}
function CircleX() {
  return (
    <>
      <IconButton>
        <IconCircleX />
      </IconButton>
    </>
  );
}
function Parentesis() {
  return (
    <>
      <IconButton>
        <IconParentheses />
      </IconButton>
    </>
  );
}
function ParentesisOff() {
  return (
    <>
      <IconButton sx={{ width: '100%' }}>
        <IconParenthesesOff />
      </IconButton>
    </>
  );
}

function OperadorAsimetrico() {
  return (
    <div style={{ width: '100%' }}>
      <TituloStandar titulo={'Operador Aritmetico'} />
      <Grid container direction="row" sx={{ width: '100%' }}>
        <Grid item md={2} xs={2}>
          <Plus />
        </Grid>
        <Grid item md={2} xs={2}>
          <Minus />
        </Grid>
        <Grid item md={2} xs={2}>
          <Divide />
        </Grid>
        <Grid item md={2} xs={2}>
          <CircleX />
        </Grid>
        <Grid item md={2} xs={2}>
          <Parentesis />
        </Grid>
        <Grid item md={2} xs={2}>
          <ParentesisOff />
        </Grid>
      </Grid>
      <Stack direction="row"></Stack>
    </div>
  );
}

export default OperadorAsimetrico;
