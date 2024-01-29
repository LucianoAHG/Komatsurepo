import React from 'react';
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material';

//import Theme
import { useTheme } from '@mui/material/styles';

function EstrategiaDecobranza() {
  const theme = useTheme();
  return (
    <Grid container border="1px solid" borderColor={theme.palette.grey[300]} padding={3}>
      <Grid item xs={12} md={5} pt={3} pb={5}>
        <Grid>
          <Typography variant="subtitle1" py={3} color={theme.palette.grey[700]}>
            Seleccione Variables de Asignaciones
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={5} md={6} pt={2.5}>
        <Grid>
          <Grid item xs={6}>
            <FormControlLabel label="Provision" value={1} control={<Checkbox />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel label="Tramos Mora" control={<Checkbox />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel label="% de Cartera" control={<Checkbox />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel label="Ticket de Crédito" control={<Checkbox />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel label="Campaña Normalización" control={<Checkbox />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel label="Zona Geografica" control={<Checkbox />} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EstrategiaDecobranza;
