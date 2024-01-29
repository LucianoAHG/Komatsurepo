// import React, { Component } from 'react';
import LOGO from '../../../assets/images/footer/poweredby.png';
// import LogoExpertChoiceMaquinaVenta from '../../../assets/images/footer/LogoMaquinaDeVentas.png';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

function Copyright(props) {
  return (
    <Grid>
      <Typography variant="body2" color="text.secondary" align=" center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://qapayments.ecloudapp.site">
          qapayments.ecloudapp.site
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Grid>
  );
}

function footer() {
  return (
    <Grid container direction={{ xs: 'column', md: 'row' }} justify="center" alignItems="flex-end">
      <Grid item md={7} xs={12} m={2} sx={{ marginLeft: 'auto' }}>
        <Copyright />
      </Grid>
      <Grid item justifyItems="center" md={4} xs={12} textAlign={{ xs: 'center' }} m={2}>
        <img
          src={LOGO}
          alt="Logo Expert Choice"
          style={{
            float: 'right',
            marginRight: '40px',
             marginTop: '2px',
             marginBottom: '10px',
            width: 250,
            height: 31
          }}
        />
      </Grid>
    </Grid>
  );
}

export default footer;
