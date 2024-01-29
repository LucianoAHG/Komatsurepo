// import { Typography } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

//IMPORT TABLA DE PERFILES
import TablaPerfiles from './tablaPerfiles';

function Perfiles() {
  return (
    <MainCard title="Perfiles">
      <SubCard title="Perfiles en el sistema">
        <TablaPerfiles />
      </SubCard>
    </MainCard>
  );
}

export default Perfiles;
